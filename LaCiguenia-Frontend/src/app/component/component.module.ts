import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from '@component/component-routing.module';
import { SectionNavbarComponent } from '@component/component/section-navbar/section-navbar.component';
import { SectionHeaderComponent } from '@component/component/section-header/section-header.component';
import { NotificationsModule } from '@service/notifications/notifications.module';

@NgModule({
  declarations: [
    SectionNavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NotificationsModule
  ],
  exports: [
    SectionNavbarComponent,
    SectionHeaderComponent
  ]
})
export class ComponentModule { }