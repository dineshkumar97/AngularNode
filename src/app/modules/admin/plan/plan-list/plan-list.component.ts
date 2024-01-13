import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/services/toaster.service';
import { PlanService } from '../plan.service';
@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private planService: PlanService, private router: Router, private modalService: NgbModal,
    private toaster:ToasterService,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal) { }
  public memberList: any;
  public deleteInformation: any

  ngOnInit(): void {
    this.initilization();
  }



  public initilization(): void {
    this.getAllMemberDetails();
  }

  public getAllMemberDetails(): void {
    this.planService.getAllPlanDetails().subscribe({
      next: (response:any) => {
        this.memberList = response.message;
        this.memberList.forEach((element: any, index: any) => {
          this.memberList[index].gender = element.gender == 1 ? 'Male' : element.gender == 2 ? 'Female' : 'Others';
        });
      },
      error: (error:any) => {
      },
    });
  }

  public createPlan(): void {
    this.router.navigate(['create'], { relativeTo: this.route });

  }

  public editMember(member: any): void {
    this.router.navigate(['update', member._id], { relativeTo: this.route });
  }
 

  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteEnqiury(): void {
    this.planService.planDelete(this.deleteInformation).subscribe({
      next: (posts) => {
        this.getAllMemberDetails();
        this.closePopup();
        this.toaster.showSuccess(posts.message);
      },
      error: (error) => {
        this.toaster.showError(error);
      },
    });
  }
  public closePopup(): void {
    this.modalService.dismissAll();
  }


}
