import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';

const routes: Routes = [
  { path: '', component: EquipmentListComponent,title: 'Equipment'},
  { path: 'create', component: EquipmentCreateComponent ,title: 'Equipment Create'},
  { path: 'update/:id', component: EquipmentCreateComponent ,title: 'Equipment Update'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
