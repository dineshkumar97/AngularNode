import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/toster/toaster.service';
import { EquipmentService } from '../equipment.service';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent  implements OnInit {
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};
  public deleteInformation: any;
  constructor(private equipmentService: EquipmentService, private router: Router, private modalService: NgbModal,
    private toaster: ToasterService,
    public activeModal: NgbActiveModal) { }
  public equipmentList: any;

  ngOnInit(): void {
    this.initilization();
  }

  public initilization(): void {
    this.loadEquipmentAllDetails();
  }

  public loadEquipmentAllDetails(): void {
    this.equipmentService.getAllEquipmentDetails().subscribe({
      next: (response: any) => {
        this.equipmentList = response.message;
        this.equipmentList.forEach((element: any, index: any) => {
          this.equipmentList[index].gender = element.gender == 1 ? 'Male' : element.gender == 2 ? 'Female' : 'Others';
        });
      },
      error: (error:any) => {
        // this.errorMessage = error;
        console.log(error)
      },
    });
  }
  public createequipment(): void {
    this.router.navigate(['/equipment/equipment-create']);

  }

  public editequipment(equipment: any): void {
    this.router.navigate(['/equipment/equipment-update', equipment._id]);

  }


  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteequipment(): void {
    this.equipmentService.equipmentDelete(this.deleteInformation).subscribe({
      next: (posts:any) => {
        this.loadEquipmentAllDetails();
        this.closePopup();
        this.toaster.showSuccess(posts.message);
      },
      error: (error:any) => {
        this.toaster.showError(error);
      },
    });
  }
  public closePopup(): void {
    this.modalService.dismissAll();
  }



}