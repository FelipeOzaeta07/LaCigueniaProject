import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from '@module/inventory/inventory-routing.module';
import { InventoryPageComponent } from '@module/inventory/inventory-page/inventory-page.component';
import { ComponentModule } from '@component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from '@module/inventory/inventory-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/inventory/inventory-page/component/section-two/section-two.component';
import { ProductModule } from '@service/product/product.module';
import { InventoriesModule } from '@service/inventory/inventories.module';
import { ModalOneComponent } from './inventory-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './inventory-page/component/modal-two/modal-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    ProductModule,
    InventoriesModule
  ]
})
export class InventoryModule { }
