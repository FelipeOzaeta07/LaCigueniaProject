import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensePageComponent } from '@module/expense/expense-page/expense-page.component';

const routes: Routes = [
  {path:'', component: ExpensePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
