import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    EquipmentListComponent,
    EquipmentCreateComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers:[NgbActiveModal]
})
export class EquipmentModule { }
