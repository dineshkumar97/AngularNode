import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const trainerModule = () => import('./trainer/trainer.module').then(x => x.TrainerModule);
const memberModule = () => import('./member/member.module').then(x => x.MemberModule);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'users', loadChildren: adminModule},
  { path: 'trainer', loadChildren: trainerModule},
  { path: 'member', loadChildren: memberModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
