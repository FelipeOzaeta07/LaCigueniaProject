import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from '@module/sales/sales-routing.module';
import { SalesPageComponent } from '@module/sales/sales-page/sales-page.component';
import { SectionOneComponent } from '@module/sales/sales-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/sales/sales-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';


@NgModule({
  declarations: [
    SalesPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentModule
  ]
})
export class SalesModule { }
