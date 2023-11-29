import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from '@module/products/products-page/products-page.component';

const routes: Routes = [
  {path:'', component: ProductsPageComponent},
  {path:'list-products-page-principal', loadChildren: () => import('@module/listproducts/listproducts.module').then(m => m.ListproductsModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
