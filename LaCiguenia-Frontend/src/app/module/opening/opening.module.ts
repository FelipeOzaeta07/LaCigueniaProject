import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningRoutingModule } from './opening-routing.module';
import { ComponentModule } from '@src/app/component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { OpeningPageComponent } from './opening-page/opening-page.component';
import { SectionOneComponent } from './opening-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './opening-page/component/section-two/section-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicingModule } from '../invoicing/invoicing.module';


@NgModule({
  declarations: [
    OpeningPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    OpeningRoutingModule,
    HttpClientModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OpeningModule { }
