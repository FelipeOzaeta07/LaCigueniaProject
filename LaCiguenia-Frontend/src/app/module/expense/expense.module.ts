import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpensePageComponent } from './expense-page/expense-page.component';
import { SectionOneComponent } from './expense-page/component/section-one/section-one.component';
import { ModalOneComponent } from './expense-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './expense-page/component/modal-two/modal-two.component';
import { ModalThreeComponent } from './expense-page/component/modal-three/modal-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { OpenModule } from '@service/opening/opening.module';
import { ExpensesModule } from '@service/expense/expenses.module';
import { PaymentModule } from '@service/payment/payment.module';
import { ProductModule } from '@service/product/product.module';
import { CategoryModule } from '@service/category/category.module';


@NgModule({
  declarations: [
    ExpensePageComponent,
    SectionOneComponent,
    ModalOneComponent,
    ModalTwoComponent,
    ModalThreeComponent,

  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentModule,
    OpenModule,
    ExpensesModule,
    PaymentModule,
    ProductModule,
    CategoryModule,
    OpenModule
  ]
})
export class ExpenseModule { }
