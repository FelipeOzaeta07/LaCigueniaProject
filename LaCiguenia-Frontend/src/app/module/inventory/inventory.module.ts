import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from '@module/inventory/inventory-routing.module';
import { InventoryPageComponent } from '@module/inventory/inventory-page/inventory-page.component';
import { ComponentModule } from '@component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from '@module/inventory/inventory-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/inventory/inventory-page/component/section-two/section-two.component';


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
