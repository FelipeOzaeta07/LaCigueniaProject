import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicingPageComponent } from './invoicing-page/invoicing-page.component';

const routes: Routes = [
  {path:'', component: InvoicingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicingRoutingModule { }
