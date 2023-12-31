import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SideMenuComponent,
    UserDetailListComponent,
    UserCreateComponent,
    EnquiryListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers:[NgbActiveModal]
})
export class AdminModule { }
