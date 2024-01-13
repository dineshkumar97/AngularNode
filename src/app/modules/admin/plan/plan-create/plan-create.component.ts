import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { PlanService } from '../plan.service';
@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.scss']
})
export class PlanCreateComponent implements OnInit {


  constructor(private planService:PlanService, private router: Router,
    private toaster:ToasterService,
    private fb: FormBuilder, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.loadMemberParticular(id);
      this.isUpdatePlan = true
    }
  }
  public isUpdatePlan = false;
  public planForm!: FormGroup;
  public planPaticularDetail:any;


  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loaPlanForm();
  }

  public loaPlanForm(): void {
    this.planForm = this.fb.group({
      name: ['', Validators.required],
      noOfDays: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }

  get formVale() { return this.planForm.controls; }

  public cancelCreate(): void {
    this.router.navigate(['admin/plan']);
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public createPlan(): void {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    } else {
      if(!this.isUpdatePlan){
        this.planService.createPlanDetails(this.planForm.value).subscribe({
          next: (posts:any) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/plan']);
          },
          error: (error:any) => {
            this.toaster.showError(error.error.message);
          },
        });
      }else{
        let json = {
          createdDate: this.planPaticularDetail.createdDate,
          createdBy: null,
          modifiedBy: null,
          isDelete: this.planPaticularDetail.isDelete,
          isActive: this.planPaticularDetail.isActive
        }
        let final = Object.assign({}, this.planForm.value, json)
        this.planService.updatePlanDetails(this.planPaticularDetail._id, final).subscribe({
          next: (posts:any) => {
            this.toaster.showSuccess(posts.message);
            this.router.navigate(['admin/plan']);
          },
          error: (error:any) => {
            this.toaster.showError(error.error.message);
          },
        });
      }
      
    }
  }

  public loadMemberParticular(id: any): void {
    this.planService.getParticularPlan(id).subscribe({
      next: (posts:any) => {
        this.planPaticularDetail = posts.message;
        this.planForm.patchValue({
          name: posts.message.name,
          price: posts.message.price,
          noOfDays: posts.message.noOfDays,
          description: posts.message.description,
        });
      },
      error: (error:any) => {
        // this.errorMessage = error;
      },
    });
  }

}
