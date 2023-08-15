import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoRoutingModule } from './pago-routing.module';
import { PagoPageComponent } from './pago-page/pago-page.component';
import { SectionOneComponent } from './pago-page/components/section-one/section-one.component';
import { SectionTwoComponent } from './pago-page/components/section-two/section-two.component';
import { SectionThreeComponent } from './pago-page/components/section-three/section-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from 'src/app/component/component.module';


@NgModule({
  declarations: [
    PagoPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ComponentModule
  ]
})
export class PagoModule { }
