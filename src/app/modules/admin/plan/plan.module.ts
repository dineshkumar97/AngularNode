import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';


@NgModule({
  declarations: [
    PlanListComponent,
    PlanCreateComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [NgbActiveModal]
})
export class PlanModule { }
