import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AuthGuard } from '../authservice/auth.guard';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: '', component: SideMenuComponent,
    children: [
      { path: 'member', component: SideMenuComponent, canActivate: [AuthGuard] },
      { path: 'userDetails', component: UserDetailListComponent, canActivate: [AuthGuard] },
      { path: 'userCreate', component: UserCreateComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
