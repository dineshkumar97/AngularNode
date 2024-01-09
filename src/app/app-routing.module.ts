import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
const AdminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const TrainerModule = () => import('./trainer/trainer.module').then(x => x.TrainerModule);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'users', loadChildren: AdminModule},
  { path: 'trainer', loadChildren: TrainerModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
