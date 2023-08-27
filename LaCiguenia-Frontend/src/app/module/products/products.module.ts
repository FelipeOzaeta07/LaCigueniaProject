import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from '@module/products/products-routing.module';
import { ProductsPageComponent } from '@module/products/products-page/products-page.component';
import { SectionOneComponent } from '@module/products/products-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/products/products-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';
import { ModalOneComponent } from '@module/products/products-page/component/modal-one/modal-one.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentModule
  ]
})
export class ProductsModule { }
