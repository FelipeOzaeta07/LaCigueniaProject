import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListproductsRoutingModule } from './listproducts-routing.module';
import { ListproductsPageComponent } from './listproducts-page/listproducts-page.component';
import { SectionOneComponent } from './listproducts-page/component/section-one/section-one.component';
import { ModalOneComponent } from './listproducts-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './listproducts-page/component/modal-two/modal-two.component';
import { ComponentModule } from '@component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from '@service/product/product.module';


@NgModule({
  declarations: [
    ListproductsPageComponent,
    SectionOneComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    ListproductsRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProductModule
  ]
})
export class ListproductsModule { }
