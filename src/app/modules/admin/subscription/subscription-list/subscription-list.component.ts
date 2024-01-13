import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/services/toaster.service';
import { SubscriptionService } from '../subscription.service';
@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent  implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private subscription: SubscriptionService, private router: Router, private modalService: NgbModal,
    private toaster:ToasterService,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal) { }
  public subscriptionList: any;
  public deleteInformation: any

  ngOnInit(): void {
    this.initilization();
  }



  public initilization(): void {
    this.getAllSubscription();
  }

  public getAllSubscription(): void {
    this.subscription.getAllSubscription().subscribe({
      next: (response:any) => {
        this.subscriptionList = response.message;
      },
      error: (error:any) => {
      },
    });
  }

  public createPlan(): void {
    this.router.navigate(['create'], { relativeTo: this.route });

  }

  public editSubscription(subscription: any): void {
    this.router.navigate(['update', subscription._id], { relativeTo: this.route });
  }
 

  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteSubscription(): void {
    this.subscription.subscriptionDelete(this.deleteInformation).subscribe({
      next: (posts) => {
        this.getAllSubscription();
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