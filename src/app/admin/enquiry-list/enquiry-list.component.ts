import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/toster/toaster.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.scss'],
})
export class EnquiryListComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
  @ViewChild('confirmation') confirmation: any;
  public modalOption: NgbModalOptions = {};

  constructor(private adminService: AdminService, private modalService: NgbModal,
    private fb: FormBuilder,
    private toaster:ToasterService,
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
    this.adminService.getAllEnquiryDetails().subscribe({
      next: (response:any) => {
        this.enquiryList = response.message;
      },
      error: (error) => {
        // this.errorMessage = error;
      },
    });
  }

  
  public loadCreateForm(): void {
    this.enquiryForm = this.fb.group({
      username: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      description: ['', Validators.required],
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
        description:data.description
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
        this.adminService.createEnquiry(this.enquiryForm.value).subscribe({
          next: (posts) => {
            this.getAllEnquiryDetails();
            this.closePopup();
            this.toaster.showSuccess(posts.message);
          },
          error: (error) => {
            this.toaster.showError(error.message);
          },
        });
      } else {
        let json = {
          created_date: this.eventValues.created_date,
          active: this.eventValues.active,
          status: this.eventValues.status,
        }
        let final = Object.assign({}, this.enquiryForm.value, json)
        this.adminService.enquiryUpdate(this.eventValues._id, final).subscribe({
          next: (posts) => {
            this.getAllEnquiryDetails();
            this.closePopup();
               this.toaster.showSuccess(posts.message);
          },
          error: (error) => {
            this.toaster.showError(error.message);
          },
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
    this.adminService.enquiryDelete(this.deleteInformation).subscribe({
      next: (posts) => {
        this.getAllEnquiryDetails();
        this.closePopup();
        this.toaster.showSuccess(posts.message);
      },
      error: (error) => {
        // this.errorMessage = error;
        this.toaster.showError(error);

      },
    });
  }
}
