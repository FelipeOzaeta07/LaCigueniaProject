import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '@module/admin/admin-routing.module';
import { AdminPageComponent } from '@module/admin/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { SectionOneComponent } from '@module/admin/admin-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/admin/admin-page/component/section-two/section-two.component';
import { SectionThreeComponent } from '@module/admin/admin-page/component/section-three/section-three.component';
import { SectionFourComponent } from '@module/admin/admin-page/component/section-four/section-four.component';
import { ModalOneComponent } from '@module/admin/admin-page/component/modal-one/modal-one.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    ModalOneComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ComponentModule
  ]
})
export class AdminModule { }