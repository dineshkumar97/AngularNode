import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private adminService: AdminService, private router: Router, private modalService: NgbModal,
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
    this.adminService.getAllMemberDetails().subscribe({
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
    this.router.navigate(['/users/member-create']);

  }

  public editMember(member: any): void {
    this.router.navigate(['/users/member-update', member._id]);

  }


  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteEnqiury(): void {
    this.adminService.memberDelete(this.deleteInformation).subscribe({
      next: (posts) => {
        this.getAllMemberDetails();
        this.closePopup();
      },
      error: (error) => {
        // this.errorMessage = error;
      },
    });
  }
  public closePopup(): void {
    this.modalService.dismissAll();
  }


}
