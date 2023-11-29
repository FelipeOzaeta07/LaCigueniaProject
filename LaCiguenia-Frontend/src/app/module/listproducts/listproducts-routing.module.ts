import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductsPageComponent } from '@module/listproducts/listproducts-page/listproducts-page.component';

const routes: Routes = [
  {path: '', component: ListproductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListproductsRoutingModule { }
