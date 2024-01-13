import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';
import { EquipmentService } from '../equipment.service';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.scss']
})
export class EquipmentCreateComponent implements OnInit {
  isUpdateEquipment = false;
  equipmentForm!: FormGroup;
  equipmentPaticularDetail: any;
  dateFormat = "yyyy-MM-dd";
  language = "en";

  constructor(private equipmentService: EquipmentService, private router: Router,
    private toaster: ToasterService,
    private fb: FormBuilder, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.loadMemberParticular(id);
      this.isUpdateEquipment = true
    }
  }



  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadMemberForm();
  }

  public loadMemberForm(): void {
    this.equipmentForm = this.fb.group({
      equipmentName: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
      dateOfPurchase: ['', Validators.required],
      vendorOrganization: ['', Validators.required],
      vendorContact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      vendorAddress: ['', Validators.required],
      vendorEmail: ['', [Validators.required, Validators.email]],
    });
  }

  get formVale() { return this.equipmentForm.controls; }

  public cancelCreate(): void {
    this.router.navigate(['admin/equipment']);
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public createEquipment(): void {
    if (this.equipmentForm.invalid) {
      this.equipmentForm.markAllAsTouched();
      return;
    } else {
      if (!this.isUpdateEquipment) {
        this.equipmentService.createEquipmentDetails(this.equipmentForm.value).subscribe({
          next: (posts: any) => {
            this.toaster.showSuccess(posts.message);
             this.router.navigate(['admin/equipment']);
          },
          error: (error: any) => {
            this.toaster.showError(error.error.message);
          },
        });
      } else {
        let json = {
          createdDate: this.equipmentPaticularDetail.createdDate,
          isDelete: this.equipmentPaticularDetail.isDelete,
          isActive: this.equipmentPaticularDetail.isActive
        }
        let final = Object.assign({}, this.equipmentForm.value, json)
        this.equipmentService.updateEquipmentDetails(this.equipmentPaticularDetail._id, final).subscribe({
          next: (posts: any) => {
            this.toaster.showSuccess(posts.message);
             this.router.navigate(['admin/equipment']);
          },
          error: (error: any) => {
            this.toaster.showError(error.error.message);
          },
        });
      }

    }
  }

  public loadMemberParticular(id: any): void {
    this.equipmentService.getParticularEquipment(id).subscribe({
      next: (posts: any) => {
        this.equipmentPaticularDetail = posts.message;
        const newDate = new Date(posts.message.dateOfPurchase);
        this.equipmentForm.patchValue({
          equipmentName: posts.message.equipmentName,
          dateOfPurchase: this.formatFormDate(newDate),
          description: posts.message.description,
          price: posts.message.price,
          quantity: posts.message.quantity,
          vendorOrganization: posts.message.vendorOrganization,
          vendorContact: posts.message.vendorContact,
          vendorAddress: posts.message.vendorAddress,
          vendorEmail: posts.message.vendorEmail,
        })
      },
      error: (error: any) => {
        // this.errorMessage = error;
      },
    });
  }

  formatFormDate(date: Date) {
    return formatDate(date, this.dateFormat, this.language);
  }

}
