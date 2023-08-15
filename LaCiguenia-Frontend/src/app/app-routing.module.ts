import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login-laciguenia', pathMatch: 'full' },
  {path: 'login-laciguenia', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)},
  {path: 'login-laciguenia/admin-page-principal', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)},
  {path: 'login-laciguenia/caja-page-principal', loadChildren: () => import('./module/caja/caja.module').then(m => m.CajaModule)},
  {path: 'login-laciguenia/pago-page-principal', loadChildren: () => import('./module/pago/pago.module').then(m => m.PagoModule)},
  {path: 'login-laciguenia/inventario-page-principal', loadChildren: () => import('./module/inventario/inventario.module').then(m => m.InventarioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }