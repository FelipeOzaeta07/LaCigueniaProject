import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashclosureRoutingModule } from '@module/cashclosure/cashclosure-routing.module';
import { CashclosurePageComponent } from '@module/cashclosure/cashclosure-page/cashclosure-page.component';
import { SectionOneComponent } from '@module/cashclosure/cashclosure-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/cashclosure/cashclosure-page/component/section-two/section-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { OpenModule } from '@service/opening/opening.module';
import { CashClosureModule } from '@service/cashclosure/cashClosure.module';
import { ModalOneComponent } from './cashclosure-page/component/modal-one/modal-one.component';
import { ExpensesModule } from '@service/expense/expenses.module';


@NgModule({
  declarations: [
    CashclosurePageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent
  ],
  imports: [
    CommonModule,
    CashclosureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentModule,
    CashClosureModule,
    OpenModule,
    ExpensesModule
  ]
})
export class CashclosureModule { }
