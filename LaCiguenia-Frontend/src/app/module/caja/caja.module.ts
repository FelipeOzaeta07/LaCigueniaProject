import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { ComponentModule } from 'src/app/component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { CajaPageComponent } from './caja-page/caja-page.component';
import { SectionOneComponent } from './caja-page/components/section-one/section-one.component';
import { SectionTwoComponent } from './caja-page/components/section-two/section-two.component';
import { SectionThreeComponent } from './caja-page/components/section-three/section-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CajaPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    CommonModule,
    CajaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule
  ]
})
export class CajaModule { }
