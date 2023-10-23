import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from '@module/setup/setup-routing.module';
import { SetupPageComponent } from '@module/setup/setup-page/setup-page.component';
import { SectionOneComponent } from '@module/setup/setup-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/setup/setup-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';
import { UserModule } from '@service/user/user.module';


@NgModule({
  declarations: [
    SetupPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    ComponentModule,
    UserModule
  ]
})
export class SetupModule { }
