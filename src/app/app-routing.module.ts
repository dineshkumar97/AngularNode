import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: '', component: MainComponent, redirectTo: '/dashboard', pathMatch: 'full',
  //   children: [
  //     { path: 'alert/:id', component: AlertDetailComponent },
  //     { path: 'alerts', component: AlertsComponent },
  //     { path: 'dashboard', component: EriskDashboardComponent }
  // ]}
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
