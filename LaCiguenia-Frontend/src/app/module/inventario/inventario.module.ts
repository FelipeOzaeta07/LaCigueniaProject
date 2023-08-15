import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioPageComponent } from './inventario-page/inventario-page.component';
import { ComponentModule } from 'src/app/component/component.module';
import { SectionOneComponent } from './inventario-page/components/section-one/section-one.component';
import { DataModule } from 'src/app/data/DataModule';


@NgModule({
  declarations: [
    InventarioPageComponent,
    SectionOneComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ComponentModule,
    DataModule
  ]
})
export class InventarioModule { }
