import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { SectionNavbarComponent } from './component/section-navbar/section-navbar.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';


@NgModule({
  declarations: [
    SectionNavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports: [
    SectionNavbarComponent,
    SectionHeaderComponent
  ]
})
export class ComponentModule { }
