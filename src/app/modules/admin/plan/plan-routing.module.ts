import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';

const routes: Routes = [
  { path: '', component: PlanListComponent },
  { path: 'create', component: PlanCreateComponent },
  { path: 'update/:id', component: PlanCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
