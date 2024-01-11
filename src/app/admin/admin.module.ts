import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    EnquiryListComponent,
    PricingComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers:[NgbActiveModal]
})
export class AdminModule { }
