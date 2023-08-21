import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '@module/admin/admin-routing.module';
import { AdminPageComponent } from '@module/admin/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@src/app/component/component.module';
import { SectionOneComponent } from './admin-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './admin-page/component/section-two/section-two.component';
import { SectionThreeComponent } from './admin-page/component/section-three/section-three.component';
import { SectionFourComponent } from './admin-page/component/section-four/section-four.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ComponentModule
  ]
})
export class AdminModule { }
