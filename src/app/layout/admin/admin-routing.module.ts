import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/app/authservice/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '', pathMatch: 'full', redirectTo: 'dashboard',
    },
    {
      path: 'dashboard',
      loadChildren: () => import('../../modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]
    },
    {
      path: 'enquiry',
      loadChildren: () => import('../../modules/admin/enquiry/enquiry.module').then(m => m.EnquiryModule), canActivate: [AuthGuard]
    },
    {
      path: 'equipment',
      loadChildren: () => import('../../modules/admin/equipment/equipment.module').then(m => m.EquipmentModule), canActivate: [AuthGuard]
    },
    {
      path: 'trainer',
      loadChildren: () => import('../../modules/admin/trainer/trainer.module').then(m => m.TrainerModule), canActivate: [AuthGuard]
    },
    {
      path: 'member',
      loadChildren: () => import('../../modules/admin/member/member.module').then(m => m.MemberModule), canActivate: [AuthGuard]
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
