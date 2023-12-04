import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuppliersPageComponent } from './listsuppliers-page/listsuppliers-page.component';

const routes: Routes = [
  {path:'', component: ListsuppliersPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsuppliersRoutingModule { }