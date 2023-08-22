import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '@module/login/login-routing.module';
import { LoginPageComponent } from '@module/login/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from '@module/login/login-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/login/login-page/component/section-two/section-two.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
