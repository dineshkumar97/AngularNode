import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { UserCreateComponent } from './user-create/user-create.component';


@NgModule({
  declarations: [
    SideMenuComponent,
    UserDetailListComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
