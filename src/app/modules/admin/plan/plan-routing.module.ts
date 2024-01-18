import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';

const routes: Routes = [
  { path: '', component: PlanListComponent ,title: 'Plan'},
  { path: 'create', component: PlanCreateComponent ,title: 'Plan Create'},
  { path: 'update/:id', component: PlanCreateComponent ,title: 'Plan Update'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
