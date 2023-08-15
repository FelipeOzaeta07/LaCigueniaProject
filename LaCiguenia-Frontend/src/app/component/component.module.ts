import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionNavbarComponent } from './section-navbar/section-navbar.component';
import { MobileSectionNavbarComponent } from './mobile-section-navbar/mobile-section-navbar.component';
import { ComponentRoutingModule } from './component-routing.module';



@NgModule({
  declarations: [
    SectionHeaderComponent,
    SectionNavbarComponent,
    MobileSectionNavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports: [
    SectionHeaderComponent,
    SectionNavbarComponent,
    MobileSectionNavbarComponent
  ]
})
export class ComponentModule { }
