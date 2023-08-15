import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioPageComponent } from './inventario-page/inventario-page.component';

const routes: Routes = [
  {path:'', component: InventarioPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
