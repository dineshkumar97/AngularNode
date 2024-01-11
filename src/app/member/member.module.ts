import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
@NgModule({
  declarations: [
    MemberListComponent,
    MemberCreateComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
  ReactiveFormsModule,
  NgToastModule
],
providers:[NgbActiveModal]
})
export class MemberModule { }
