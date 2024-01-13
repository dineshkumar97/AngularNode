import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription-create',
  templateUrl: './subscription-create.component.html',
  styleUrls: ['./subscription-create.component.scss']
})
export class SubscriptionCreateComponent implements OnInit {


  constructor(private SubscriptionService: SubscriptionService, private router: Router,
    private toaster:ToasterService,
    private fb: FormBuilder, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.loadMemberParticular(id);
      this.isUpdateMember = true
    }
  }
  public isUpdateMember = false;
  public memeberForm!: FormGroup;
  public memberPaticularDetail:any;
  public memberList:any;


  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadMemberForm();
    this.loadMemberlist();
  }

  public loadMemberlist():void{
    this.SubscriptionService.getAllPlanDetails().subscribe({
      next: (response) => {
        this.memberList = response.message;
      },
      error: (error) => {
      },
    });
  }
  public loadPlanlist():void{
    this.SubscriptionService.getAllMemberList().subscribe({
      next: (response) => {
        this.memberList = response.message;
      },
      error: (error) => {
      },
    });
  }
  public onOptionsSelected(value:string):void{
    console.log("the selected value is " + value);
}
  public loadMemberForm(): void {
    this.memeberForm = this.fb.group({
      member: ['', Validators.required],
    });
  }

  get formVale() { return this.memeberForm.controls; }

 
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
    if (this.memeberForm.invalid) {
      console.log('onk')
      this.memeberForm.markAllAsTouched();
      return;
    } else {
      if(!this.isUpdateMember){
        this.SubscriptionService.createSubscription(this.memeberForm.value).subscribe({
          next: (posts) => {
            console.log('sss', posts)
             this.router.navigate(['admin/subscription']);
          },
          error: (error) => {
          },
        });
      }else{
        let json = {
          status: this.memberPaticularDetail.status,
          createdDate: this.memberPaticularDetail.createdDate,
          createdBy: null,
          modifiedBy: null,
          modifiedDate: this.memberPaticularDetail.modifiedDate,
          isDelete: this.memberPaticularDetail.isDelete,
          isActive: this.memberPaticularDetail.isActive
        }
        let final = Object.assign({}, this.memeberForm.value, json)
        this.SubscriptionService.updateSubscription(this.memberPaticularDetail._id, final).subscribe({
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
        console.log('sss', posts)
        this.memberPaticularDetail = posts.message;
        this.memeberForm.patchValue({
          username: posts.message.username,
          mobileno: posts.message.mobileno,
          gender: posts.message.gender,
          age: posts.message.age,
          address: posts.message.address,
          emailId:posts.message.emailId
        })

      },
      error: (error) => {
        // this.errorMessage = error;
      },
    });
  }

}
