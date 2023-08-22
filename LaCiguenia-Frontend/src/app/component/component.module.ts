import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from '@app/component/component-routing.module';
import { SectionNavbarComponent } from '@app/component/component/section-navbar/section-navbar.component';
import { SectionHeaderComponent } from '@app/component/component/section-header/section-header.component';


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
