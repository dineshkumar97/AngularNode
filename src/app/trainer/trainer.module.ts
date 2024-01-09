import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { NgToastModule } from 'ng-angular-popup';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerCreateComponent } from './trainer-create/trainer-create.component';


@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerCreateComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers:[NgbActiveModal]
})
export class TrainerModule { }
