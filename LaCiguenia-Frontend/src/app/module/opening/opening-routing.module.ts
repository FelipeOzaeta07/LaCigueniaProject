import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningPageComponent } from './opening-page/opening-page.component';

const routes: Routes = [
  {path:'', component: OpeningPageComponent},
  {path:'invoicing-page-principal', loadChildren: () => import('@module/invoicing/invoicing.module').then(m => m.InvoicingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningRoutingModule { }
