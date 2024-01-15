import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { AdminService } from 'src/app/services/admin.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private memberService: MemberService, private router: Router, private modalService: NgbModal,
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
    this.memberService.getAllMemberDetails().subscribe({
      next: (response) => {
        this.memberList = response.message;
        this.memberList.forEach((element: any, index: any) => {
          this.memberList[index].gender = element.gender == 1 ? 'Male' : element.gender == 2 ? 'Female' : 'Others';
        });
      },
      error: (error) => {
      },
    });
  }

  public createMember(): void {
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
    this.memberService.memberDelete(this.deleteInformation).subscribe({
      next: (posts) => {
        this.getAllMemberDetails();
        this.closePopup();
        this.toaster.showSuccess(posts.message);
      },
      error: (error) => {
        // this.errorMessage = error;
        this.toaster.showError(error);
      },
    });
  }
  public closePopup(): void {
    this.modalService.dismissAll();
  }


}
