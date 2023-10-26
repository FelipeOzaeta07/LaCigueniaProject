import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningRoutingModule } from '@module/opening/opening-routing.module';
import { ComponentModule } from '@component/component.module';
import { HttpClientModule } from '@angular/common/http';
import { OpeningPageComponent } from '@module/opening/opening-page/opening-page.component';
import { SectionOneComponent } from '@module/opening/opening-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/opening/opening-page/component/section-two/section-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenModule } from '@service/opening/opening.module';
import { InvoiceModule } from '@service/invoice/invoice.module';
import { StoreModule } from '@service/store/store.module';

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
    FormsModule,
    OpenModule,
    InvoiceModule,
    StoreModule
  ]
})
export class OpeningModule { }
