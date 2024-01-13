import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './authservice/auth.guard';
const adminModule = () => import('./layout/admin/admin.module').then(x => x.AdminModule);
const websiteModule = () => import('./layout/website/website.module').then(x => x.WebsiteModule);

const routes: Routes = [
  { path: '', loadChildren: websiteModule },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: adminModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
