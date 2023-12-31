import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.scss']
})
export class EnquiryListComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private adminService: AdminService, private modalService: NgbModal,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal) { }
  enquiryForm!: FormGroup;
  public enquiryList: any;
  public deleteInformation: any;

  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.getAllEnquiryDetails();
    this.loadCreateForm();
  }

  public getAllEnquiryDetails(): void {
    this.adminService.getAllEnquiryDetails().subscribe((response: any) => {
      this.enquiryList = response.message;
    })
  }

  public loadCreateForm(): void {
    this.enquiryForm = this.fb.group({
      username: ['', Validators.required],
      mobileno: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }

  eventValue: any;
  eventValues: any;
  public open(event: any, data: any): void {
    this.eventValue = event;
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.eventValues = data;
    this.modalService.open(this.myModal, this.modalOption);
    if (event == 'update') {
      this.enquiryForm.patchValue({
        username: data.username,
        mobileno: data.mobileno,
        age: data.age,
        address: data.address,
        emailId: data.emailId,
      });
    }
  }

  public closePopup(): void {
    this.modalService.dismissAll();
    this.enquiryForm.reset();
  }


  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  get formVale() { return this.enquiryForm.controls; }

  public createEnquiry(): void {
    if (this.enquiryForm.invalid) {
      return;
    } else {
      if (this.eventValue == 'create') {
        this.adminService.createEnquiry(this.enquiryForm.value).subscribe((response: any) => {
          this.getAllEnquiryDetails();
          this.closePopup();
        });
      } else {
        let json = {
          created_date: this.eventValues.created_date,
          active: this.eventValues.active,
          status: this.eventValues.status,
        }
        let final = Object.assign({}, this.enquiryForm.value, json)
        this.adminService.enquiryUpdate(this.eventValues._id, final).subscribe((response: any) => {
          this.getAllEnquiryDetails();
          this.closePopup();
        });
      }
    }
  }

  public confirmationDelete(event: any): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(this.confirmation, this.modalOption);
    this.deleteInformation = event._id;

  }

  public deleteEnqiury(): void {
    this.adminService.enquiryDelete(this.deleteInformation).subscribe((response: any) => {
      this.getAllEnquiryDetails();
      this.closePopup();
    });

  }
}
