import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoPageComponent } from './pago-page/pago-page.component';

const routes: Routes = [
  {path:'', component: PagoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
