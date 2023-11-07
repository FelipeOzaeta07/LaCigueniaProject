import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpensePageComponent } from './expense-page/expense-page.component';
import { SectionOneComponent } from './expense-page/component/section-one/section-one.component';
import { ModalOneComponent } from './expense-page/component/modal-one/modal-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { OpenModule } from '@service/opening/opening.module';
import { ExpensesModule } from '@service/expense/expenses.module';
import { PaymentModule } from '@service/payment/payment.module';
import { ProductModule } from '@service/product/product.module';
import { CategoryModule } from '@service/category/category.module';
import { InventoryModule } from '@module/inventory/inventory.module';


@NgModule({
  declarations: [
    ExpensePageComponent,
    SectionOneComponent,
    ModalOneComponent

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
    OpenModule,
    InventoryModule
  ]
})
export class ExpenseModule { }
