import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierPageComponent } from '@module/supplier/supplier-page/supplier-page.component';

const routes: Routes = [
  {path:'', component: SupplierPageComponent},
  {path:'list-supplier-principal', loadChildren: () => import('@module/listsuppliers/listsuppliers.module').then(m => m.ListsuppliersModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
