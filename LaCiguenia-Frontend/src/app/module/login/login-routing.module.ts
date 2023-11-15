import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@module/login/login-page/login-page.component';
import { ValidateTokenService } from '@service/user/implement/ValidateTokenService';

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'admin-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/admin/admin.module').then(m => m.AdminModule) },
  {path:'opening-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/opening/opening.module').then(m => m.OpeningModule) },
  {path:'inventory-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/inventory/inventory.module').then(m => m.InventoryModule) },
  {path:'products-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/products/products.module').then(m => m.ProductsModule)},
  {path:'sales-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/sales/sales.module').then(m => m.SalesModule)},
  {path:'setup-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/setup/setup.module').then(m => m.SetupModule)},
  {path:'supplier-page-principal', canActivate: [ValidateTokenService], loadChildren: () => import('@module/supplier/supplier.module').then(m => m.SupplierModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }