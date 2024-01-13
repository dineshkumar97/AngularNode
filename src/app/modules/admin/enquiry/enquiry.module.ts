import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EnquiryListComponent
  ],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    NgbModule,
  ]
})
export class EnquiryModule { }
