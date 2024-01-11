import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from '../layout/side-menu/side-menu.component';
import { AuthGuard } from '../authservice/auth.guard';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';

const routes: Routes = [
  {
    path: '', component: SideMenuComponent ,canActivate: [AuthGuard] ,
    children: [
      { path: 'equipment-list', component: EquipmentListComponent, canActivate: [AuthGuard] },
      { path: 'equipment-create', component: EquipmentCreateComponent, canActivate: [AuthGuard] },
      { path: 'equipment-update/:id', component: EquipmentCreateComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
