import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from '@module/supplier/supplier-routing.module';
import { SupplierPageComponent } from '@module/supplier/supplier-page/supplier-page.component';
import { SectionOneComponent } from '@module/supplier/supplier-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/supplier/supplier-page/component/section-two/section-two.component';
import { ModalOneComponent } from '@module/supplier/supplier-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from '@module/supplier/supplier-page/component/modal-two/modal-two.component';
import { ModalThreeComponent } from '@module/supplier/supplier-page/component/modal-three/modal-three.component';
import { ComponentModule } from '@component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuppliersModule } from '@service/suppliers/suppliers.module';

@NgModule({
  declarations: [
    SupplierPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent,
    ModalThreeComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SuppliersModule
  ]
})
export class SupplierModule { }
