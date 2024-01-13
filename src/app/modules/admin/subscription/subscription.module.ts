import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionCreateComponent } from './subscription-create/subscription-create.component';


@NgModule({
  declarations: [
    SubscriptionListComponent,
    SubscriptionCreateComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [NgbActiveModal]
})
export class SubscriptionModule { }
