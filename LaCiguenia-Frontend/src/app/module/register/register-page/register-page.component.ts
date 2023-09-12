import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  modal!: boolean;

  modalActivate(datos: boolean){
    this.modal = datos;
  }

  modalActivateTwo(datos: boolean){
    this.modal = datos;
  }
}
