import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { TrainerService } from '../trainer.service';
@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.scss']
})
export class TrainerCreateComponent implements OnInit {


  constructor(private trainerService:TrainerService, private router: Router,
    private toaster:ToasterService,
    private fb: FormBuilder, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.loadMemberParticular(id);
      this.isUpdateMember = true
    }
  }
  public memberList: any;
  public isUpdateMember = false;
  public trainerForm!: FormGroup;
  public memberPaticularDetail:any;


  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadMemberForm();
  }

  public loadMemberForm(): void {
    this.trainerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }

  get formVale() { return this.trainerForm.controls; }

  public cancelCreate(): void {
    this.router.navigate(['admin/trainer']);
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public createMember(): void {
    if (this.trainerForm.invalid) {
      this.trainerForm.markAllAsTouched();
      return;
    } else {
      if(!this.isUpdateMember){
        this.trainerService.createTrainerDetails(this.trainerForm.value).subscribe({
          next: (posts:any) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/trainer']);
          },
          error: (error:any) => {
            this.toaster.showError(error.error.message);
          },
        });
      }else{
        let json = {
          status: this.memberPaticularDetail.status,
          createdDate: this.memberPaticularDetail.createdDate,
          createdBy: null,
          modifiedBy: null,
          isDelete: this.memberPaticularDetail.isDelete,
          isActive: this.memberPaticularDetail.isActive
        }
        let final = Object.assign({}, this.trainerForm.value, json)
        this.trainerService.updateTrainerDetails(this.memberPaticularDetail._id, final).subscribe({
          next: (posts:any) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/trainer']);
          },
          error: (error:any) => {
            this.toaster.showError(error.error.message);
          },
        });
      }
      
    }
  }

  public loadMemberParticular(id: any): void {
    this.trainerService.getParticularTrainer(id).subscribe({
      next: (posts:any) => {
        this.memberPaticularDetail = posts.message;
        this.trainerForm.patchValue({
          firstName: posts.message.firstName,
          mobileNo: posts.message.mobileNo,
          lastName: posts.message.lastName,
          gender: posts.message.gender,
          address: posts.message.address,
          emailId:posts.message.emailId
        });
      },
      error: (error:any) => {
        // this.errorMessage = error;
      },
    });
  }

}
