import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { ComponentModule } from '@src/app/component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from './inventory-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './inventory-page/component/section-two/section-two.component';


@NgModule({
  declarations: [
    InventoryPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule,
    ComponentModule
  ]
})
export class InventoryModule { }
