import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';

const routes: Routes = [
  { path: '', component: EnquiryListComponent ,title: 'Enquiry'},
  // { path: 'create', component: EquipmentCreateComponent },
  // { path: 'update/:id', component: EquipmentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule { }
