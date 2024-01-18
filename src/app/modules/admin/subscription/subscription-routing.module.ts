import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionCreateComponent } from './subscription-create/subscription-create.component';

const routes: Routes = [
  { path: '', component: SubscriptionListComponent ,title: 'Subcription'},
  { path: 'create', component: SubscriptionCreateComponent,title: 'Subcription Create' },
  { path: 'update/:id', component: SubscriptionCreateComponent, title: 'Subcription Update'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
