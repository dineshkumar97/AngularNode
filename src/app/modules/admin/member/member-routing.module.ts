import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';

const routes: Routes = [
  { path: '', component: MemberListComponent ,title: 'Member'},
  { path: 'create', component: MemberCreateComponent ,title: 'Member Create'},
  { path: 'update/:id', component: MemberCreateComponent ,title: 'Member Update'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
