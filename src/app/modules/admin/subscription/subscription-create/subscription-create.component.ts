import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { SubscriptionService } from '../subscription.service';
import { formatDate } from "@angular/common";
import { DatePipe } from "@angular/common";
@Component({
  selector: 'app-subscription-create',
  templateUrl: './subscription-create.component.html',
  styleUrls: ['./subscription-create.component.scss'],
  providers: [DatePipe]
})
export class SubscriptionCreateComponent implements OnInit {


  constructor(private SubscriptionService: SubscriptionService, private router: Router,
    private toaster: ToasterService,
    private datePipe: DatePipe,
    private fb: FormBuilder, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.loadMemberParticular(id);
      this.isUpdateMember = true
    }
  }
  public dateFormat = "yyyy-MM-dd";
  public language = "en";
  public isUpdateMember = false;
  public subcriptionForm!: FormGroup;
  public subcriptionParticularDetails: any;
  public memberList: any;
  public planList: any;
  public filterMember: any;
  public filterPlan: any;
  public todayDate: any;
  public endDate: any;

  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.loadMemberForm();
    this.loadMemberlist();
    this.loadPlanlist();
  }
  public dateStartDate(event: any): void {
    this.endDate = this.datePipe.transform(event.target.value, 'yyyy-MM-dd');
    this.subcriptionForm.controls['endDate'].reset();
  }
  public loadMemberForm(): void {
    this.subcriptionForm = this.fb.group({
      member: ['', Validators.required],
      plan: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  public loadMemberlist(): void {
    this.SubscriptionService.getAllMemberList().subscribe({
      next: (response) => {
        this.memberList = response.message;
      },
      error: (error) => {
      },
    });
  }
  public loadPlanlist(): void {
    this.SubscriptionService.getAllPlanDetails().subscribe({
      next: (response) => {
        this.planList = response.message;
      },
      error: (error) => {
      },
    });
  }
  public onOptionsMember(value: string): void {
    let filterUserName = this.memberList.find((user: any) => user._id === value);
    this.filterMember = filterUserName;
  }

  public onOptionsPlan(value: string): void {
    let filterUserName = this.planList.find((user: any) => user._id === value);
    this.filterPlan = filterUserName;
  }
  

  get formVale() { return this.subcriptionForm.controls; }


  public cancelCreate(): void {
    this.router.navigate(['admin/subscription']);
  }
  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public createMember(): void {
    if (this.subcriptionForm.invalid) {
      console.log('onk')
      this.subcriptionForm.markAllAsTouched();
      return;
    } else {
      if (!this.isUpdateMember) {
        const json = {
          member: {
            id: this.filterMember._id,
            text: this.filterMember.username,
          },
          plan: {
            id: this.filterPlan._id,
            text: this.filterPlan.name,
          },
          startDate: this.subcriptionForm.value.startDate,
          endDate: this.subcriptionForm.value.endDate,
        }
        this.SubscriptionService.createSubscription(json).subscribe({
          next: (posts) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/subscription']);
          },
          error: (error) => {
            this.toaster.showError(error);
          },
        });
      } else {
        console.log('subcriptionParticularDetails',this.subcriptionParticularDetails)
        const json = {
          member: {
            id: this.subcriptionParticularDetails.member.id,
            text: this.subcriptionParticularDetails.member.text,
          },
          plan: {
            id: this.filterPlan?._id == undefined ? this.subcriptionParticularDetails.plan.id : this.filterPlan?._id,
            text: this.filterPlan?.name == undefined ? this.subcriptionParticularDetails.plan.text : this.filterPlan?.name,
          },
          startDate: this.subcriptionForm.value.startDate,
          endDate: this.subcriptionForm.value.endDate,
          createdDate:this.subcriptionParticularDetails.createdDate,
          createdBy: null,
          modifiedBy: null,
          isDelete: this.subcriptionParticularDetails.isDelete,
          isActive: this.subcriptionParticularDetails.isActive
        }
        let final = Object.assign({}, this.subcriptionForm.value, json)
        this.SubscriptionService.updateSubscription(this.subcriptionParticularDetails._id, final).subscribe({
          next: (posts) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/subscription']);
          },
          error: (error) => {
            this.toaster.showError(error);
          },
        });
      }

    }
  }

  public loadMemberParticular(id: any): void {
    this.SubscriptionService.getParticularSubscription(id).subscribe({
      next: (posts) => {
        this.subcriptionParticularDetails = posts.message;
        const startDate = new Date(posts.message.startDate);
        const endDate = new Date(posts.message.endDate);
        this.subcriptionForm.patchValue({
          member: posts.message.member.id,
          plan: posts.message.plan.id,
          startDate: this.formatFormDate(startDate),
          endDate: this.formatFormDate(endDate),
        });

      },
      error: (error) => {
        // this.errorMessage = error;
      },
    });
  }
  formatFormDate(date: Date) {
    return formatDate(date, this.dateFormat, this.language);
  }

}
