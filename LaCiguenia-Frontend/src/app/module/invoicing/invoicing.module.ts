import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from '@module/invoicing/invoicing-routing.module';
import { InvoicingPageComponent } from '@module/invoicing/invoicing-page/invoicing-page.component';
import { SectionOneComponent } from '@module/invoicing/invoicing-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/invoicing/invoicing-page/component/section-two/section-two.component';
import { SectionThreeComponent } from '@module/invoicing/invoicing-page/component/section-three/section-three.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { ModalOneComponent } from '@module/invoicing/invoicing-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from '@module/invoicing/invoicing-page/component/modal-two/modal-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from '@service/category/category.module';
import { ProductModule } from '@service/product/product.module';
import { CustomerModule } from '@service/customer/customer.module';


@NgModule({
  declarations: [
    InvoicingPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    HttpClientModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    CategoryModule,
    ProductModule,
    CustomerModule
  ]
})
export class InvoicingModule { }
