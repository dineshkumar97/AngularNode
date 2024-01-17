import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AttendanceListComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule
  ]
})
export class AttendanceModule { }
