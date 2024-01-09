import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/toster/toaster.service';
@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};
  public deleteInformation: any;
  constructor(private trainerService: TrainerService, private router: Router, private modalService: NgbModal,
    private toaster: ToasterService,
    public activeModal: NgbActiveModal) { }
  public trainerList: any;

  ngOnInit(): void {
    this.initilization();
  }

  public initilization(): void {
    this.loadTrainerAllDetails();
  }

  public loadTrainerAllDetails(): void {
    this.trainerService.getAllTrainerDetails().subscribe({
      next: (response: any) => {
        this.trainerList = response.message;
        this.trainerList.forEach((element: any, index: any) => {
          this.trainerList[index].fullName = `${element.firstName} ${element.lastName}`
          this.trainerList[index].gender = element.gender == 1 ? 'Male' : element.gender == 2 ? 'Female' : 'Others';
        });
      },
      error: (error) => {
        // this.errorMessage = error;
        console.log(error)
      },
    });
  }
  public createTrainer(): void {
    this.router.navigate(['/trainer/trainer-create']);

  }

  public editTrainer(trainer: any): void {
    this.router.navigate(['/trainer/trainer-update', trainer._id]);

  }


  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteTrainer(): void {
    this.trainerService.trainerDelete(this.deleteInformation).subscribe({
      next: (posts:any) => {
        this.loadTrainerAllDetails();
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