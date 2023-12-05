import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsuppliersRoutingModule } from './listsuppliers-routing.module';
import { ListsuppliersPageComponent } from './listsuppliers-page/listsuppliers-page.component';
import { ComponentModule } from '@component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from './listsuppliers-page/component/section-one/section-one.component';
import { ModalOneComponent } from './listsuppliers-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './listsuppliers-page/component/modal-two/modal-two.component';
import { ProductModule } from '@service/product/product.module';
import { InventoriesModule } from '@service/inventory/inventories.module';
import { SuppliersModule } from '@service/suppliers/suppliers.module';


@NgModule({
  declarations: [
    ListsuppliersPageComponent,
    SectionOneComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    ListsuppliersRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SuppliersModule
  ]
})
export class ListsuppliersModule { }
