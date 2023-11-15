import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierPageComponent } from '@module/supplier/supplier-page/supplier-page.component';

const routes: Routes = [
  {path:'', component: SupplierPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
