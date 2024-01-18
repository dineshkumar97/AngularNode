import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerCreateComponent } from './trainer-create/trainer-create.component';

const routes: Routes = [
  { path: '', component: TrainerListComponent ,title: 'Trainer'},
  { path: 'create', component: TrainerCreateComponent ,title: 'Trainer Create'},
  { path: 'update/:id', component: TrainerCreateComponent ,title: 'Trainer Update'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
