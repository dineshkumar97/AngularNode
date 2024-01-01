import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    SideMenuComponent,
    EnquiryListComponent,
    MemberListComponent,
    MemberCreateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule,
    ToastModule
  ],
  providers:[NgbActiveModal,MessageService]
})
export class AdminModule { }
