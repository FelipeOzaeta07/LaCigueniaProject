import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashclosurePageComponent } from './cashclosure-page/cashclosure-page.component';

const routes: Routes = [
  {path: '', component: CashclosurePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashclosureRoutingModule { }
