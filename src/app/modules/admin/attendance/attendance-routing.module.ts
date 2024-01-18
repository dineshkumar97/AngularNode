import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

const routes: Routes = [
  { path: '', component: AttendanceListComponent,title: 'Attendance'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
