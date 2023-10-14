import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesPageComponent } from '@module/sales/sales-page/sales-page.component';
import { SalesValidateAccessTokenService } from '@service/sales/SalesValidateAccessTokenService';

const routes: Routes = [
  {path:'', component: SalesPageComponent},
  {path:'cash-closure-page-principal', canActivate: [SalesValidateAccessTokenService], loadChildren: () => import('@module/cashclosure/cashclosure.module').then(m => m.CashclosureModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
