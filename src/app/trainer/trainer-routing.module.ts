import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AuthGuard } from '../authservice/auth.guard';
import { SideMenuComponent } from '../layout/side-menu/side-menu.component';
import { TrainerCreateComponent } from './trainer-create/trainer-create.component';

const routes: Routes = [
  {
    path: '', component: SideMenuComponent ,canActivate: [AuthGuard] ,
    children: [
      { path: 'trainer-list', component: TrainerListComponent, canActivate: [AuthGuard] },
      { path: 'trainer-create', component: TrainerCreateComponent, canActivate: [AuthGuard] },
      { path: 'trainer-update/:id', component: TrainerCreateComponent, canActivate: [AuthGuard] },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
