import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AuthGuard } from '../authservice/auth.guard';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: SideMenuComponent ,canActivate: [AuthGuard] ,
    children: [
      { path: 'member-list', component: MemberListComponent, canActivate: [AuthGuard] },
      { path: 'member-create', component: MemberCreateComponent, canActivate: [AuthGuard] },
      { path: 'member-update/:id', component: MemberCreateComponent, canActivate: [AuthGuard] },
      { path: 'enquiry-list', component: EnquiryListComponent, canActivate: [AuthGuard] },
      { path: 'pricing', component: PricingComponent, canActivate: [AuthGuard] },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
