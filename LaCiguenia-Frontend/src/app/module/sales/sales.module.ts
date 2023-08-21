import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { SectionOneComponent } from './sales-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './sales-page/component/section-two/section-two.component';
import { ComponentModule } from '@src/app/component/component.module';


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
