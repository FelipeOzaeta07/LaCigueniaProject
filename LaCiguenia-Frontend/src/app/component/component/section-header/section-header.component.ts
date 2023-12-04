import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericResponse } from '@commons/response/GenericResponse';
import { WHATSAPP, SING_UP } from '@component/component/section-header/constans/section-header';
import { CreateNotificationUseCase } from '@repository/notification/case/CreateNotificationUseCase';
import { CloseSesionUserUseCase } from '@repository/user/case/CloseSesionUserUseCase';
import { SalesAccessTokenService } from '@service/sales/SalesAccessTokenService';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent  implements OnInit{

  textWhatsApp = WHATSAPP;
  textSingUp = SING_UP;

  active: boolean = false;

  activeNotification!: boolean;
  amountNotification!: number;
  textNotification!: number;

  constructor(private closeSesionUserUseCase: CloseSesionUserUseCase, private salesAccessTokenService: SalesAccessTokenService,
    private router: Router, private createNotificationUseCase: CreateNotificationUseCase){}

  ngOnInit(): void {
    this.createNotification();
  }

  singUp(){
    this.active = !this.active
  }

  createNotification(){
    this.createNotificationUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.activeNotification = true;
        this.textNotification = res.objectResponse.length;
        this.amountNotification = res.objectResponse.length;
      }
    );
  }

  deleteLocalStorage(){
    let accessToken = this.salesAccessTokenService.salesAccessTokenGet();

    if(accessToken == 'Operación exitosa') {
      this.router.navigate(["login-laciguenia/sales-page-principal/cash-closure-page-principal"])
    }else{
      this.closeSesionUserUseCase.execute();
    }
  }
}
