import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from '@module/register/register-routing.module';
import { RegisterPageComponent } from '@module/register/register-page/register-page.component';
import { SectionOneComponent } from '@module/register/register-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/register/register-page/component/section-two/section-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from '@service/user/user.module';


@NgModule({
  declarations: [
    RegisterPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule
  ]
})
export class RegisterModule { }
