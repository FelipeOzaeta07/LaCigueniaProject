import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WHATSAPP, SING_UP } from '@component/component/section-header/constans/section-header';
import { CloseSesionUserUseCase } from '@repository/user/case/CloseSesionUserUseCase';
import { SalesAccessTokenService } from '@service/sales/SalesAccessTokenService';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  textWhatsApp = WHATSAPP;
  textSingUp = SING_UP;

  active: boolean = false;

  constructor(private closeSesionUserUseCase: CloseSesionUserUseCase, private salesAccessTokenService: SalesAccessTokenService,
    private router: Router){}

  singUp(){
    this.active = !this.active
  }

  deleteLocalStorage(){
    let accessToken = this.salesAccessTokenService.salesAccessTokenGet();

    console.log("Datos: " + accessToken)

    if(accessToken == 'Operación exitosa') {
      this.router.navigate(["login-laciguenia/sales-page-principal/cash-closure-page-principal"])
    }else{
      this.closeSesionUserUseCase.execute();
    }
  }
}
