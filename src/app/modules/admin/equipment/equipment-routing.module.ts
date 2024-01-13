import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';

const routes: Routes = [
  { path: '', component: EquipmentListComponent },
  { path: 'create', component: EquipmentCreateComponent },
  { path: 'update/:id', component: EquipmentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
