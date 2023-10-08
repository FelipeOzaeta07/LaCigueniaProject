import { Component } from '@angular/core';
import { WHATSAPP, SING_UP } from '@component/component/section-header/constans/section-header';
import { CloseSesionUserUseCase } from '@repository/user/case/CloseSesionUserUseCase';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  textWhatsApp = WHATSAPP;
  textSingUp = SING_UP;

  active: boolean = false;

  constructor(private closeSesionUserUseCase: CloseSesionUserUseCase){}

  singUp(){
    this.active = !this.active
  }

  deleteLocalStorage(){
    this.closeSesionUserUseCase.execute();
    window.location.reload();
  }
}
