import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [

    EnquiryListComponent,
    MemberListComponent,
    MemberCreateComponent,
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
