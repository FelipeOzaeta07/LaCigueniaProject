import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from '@module/setup/setup-routing.module';
import { SetupPageComponent } from '@module/setup/setup-page/setup-page.component';
import { SectionOneComponent } from '@module/setup/setup-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/setup/setup-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';
import { UserModule } from '@service/user/user.module';
import { SectionThreeComponent } from './setup-page/component/section-three/section-three.component';
import { SectionFourComponent } from './setup-page/component/section-four/section-four.component';
import { SectionFiveComponent } from './setup-page/component/section-five/section-five.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@service/store/store.module';
import { ModalOneComponent } from './setup-page/component/modal-one/modal-one.component';
import { PaymentModule } from '@service/payment/payment.module';
import { CategoryModule } from '@service/category/category.module';
import { SectionSixComponent } from './setup-page/component/section-six/section-six.component';


@NgModule({
  declarations: [
    SetupPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    ModalOneComponent,
    SectionSixComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    ComponentModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule,
    PaymentModule,
    CategoryModule,
  ]
})
export class SetupModule { }
