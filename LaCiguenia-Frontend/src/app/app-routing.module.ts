import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login-laciguenia', pathMatch: 'full' },
  {path: 'login-laciguenia', loadChildren: () => import('@app/module/login/login.module').then(m => m.LoginModule)},
  {path: 'login-laciguenia/admin-page-principal', loadChildren: () => import('@module/admin/admin.module').then(m => m.AdminModule) },
  {path: 'login-laciguenia/opening-page-principal', loadChildren: () => import('@module/opening/opening.module').then(m => m.OpeningModule) },
  {path: 'login-laciguenia/inventory-page-principal', loadChildren: () => import('@module/inventory/inventory.module').then(m => m.InventoryModule) },
  {path: 'login-laciguenia/products-page-principal', loadChildren: () => import('@module/products/products.module').then(m => m.ProductsModule)},
  {path: 'login-laciguenia/sales-page-principal', loadChildren: () => import('@module/sales/sales.module').then(m => m.SalesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
