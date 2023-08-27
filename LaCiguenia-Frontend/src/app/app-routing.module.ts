import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login-laciguenia', pathMatch: 'full' },
  {path: 'login-laciguenia', loadChildren: () => import('@module/login/login.module').then(m => m.LoginModule)},
  {path: 'registro-laciguenia', loadChildren: () => import('@module/register/register.module').then(m => m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
