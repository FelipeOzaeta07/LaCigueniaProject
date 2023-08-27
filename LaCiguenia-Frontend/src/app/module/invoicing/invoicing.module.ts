import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from '@module/invoicing/invoicing-routing.module';
import { InvoicingPageComponent } from '@module/invoicing/invoicing-page/invoicing-page.component';
import { SectionOneComponent } from '@module/invoicing/invoicing-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/invoicing/invoicing-page/component/section-two/section-two.component';
import { SectionThreeComponent } from '@module/invoicing/invoicing-page/component/section-three/section-three.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { ModalOneComponent } from './invoicing-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './invoicing-page/component/modal-two/modal-two.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class InvoicingModule { }
