import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from '@module/sales/sales-routing.module';
import { SalesPageComponent } from '@module/sales/sales-page/sales-page.component';
import { SectionOneComponent } from '@module/sales/sales-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/sales/sales-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';
import { InvoiceModule } from '@service/invoice/invoice.module';
import { ModalOneComponent } from './sales-page/component/modal-one/modal-one.component';
import { DetailModule } from '@service/detail/detail.module';
import { ModalTwoComponent } from './sales-page/component/modal-two/modal-two.component';
import { SalesAccessTokenGetUseCase } from '@repository/sales/case/SalesAccessTokenGetUseCase';


@NgModule({
  declarations: [
    SalesPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentModule,
    InvoiceModule,
    DetailModule
  ]
})
export class SalesModule { }
