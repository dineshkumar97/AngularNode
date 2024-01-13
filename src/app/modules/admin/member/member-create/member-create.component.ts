import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {


  constructor(private adminService: AdminService, private router: Router,
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
  public memeberForm!: FormGroup;
  public memberPaticularDetail:any;


  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadMemberForm();
  }

  public loadMemberForm(): void {
    this.memeberForm = this.fb.group({
      username: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }

  get formVale() { return this.memeberForm.controls; }

 
  public cancelCreate(): void {
    this.router.navigate(['admin/member']);
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
        this.adminService.createMember(this.memeberForm.value).subscribe({
          next: (posts) => {
            console.log('sss', posts)
             this.router.navigate(['admin/member']);
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
        this.adminService.memberUpdate(this.memberPaticularDetail._id, final).subscribe({
          next: (posts) => {
            this.toaster.showSuccess(posts.message);
             this.router.navigate(['admin/member']);
          },
          error: (error) => {
            this.toaster.showError(error);
          },
        });
      }
      
    }
  }

  public loadMemberParticular(id: any): void {
    this.adminService.getParticularMember(id).subscribe({
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
