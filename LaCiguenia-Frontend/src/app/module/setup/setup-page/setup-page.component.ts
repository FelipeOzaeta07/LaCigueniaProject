import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent {

  component!: boolean;
  componentThree!: boolean;
  componentFour!: boolean;
  componentFive!: boolean;
  componentSix!: boolean;
  modal!: boolean;

  eventStoreAddComponent(data: boolean){
    this.componentThree = data;
    this.component = this.componentThree;
  }

  eventPaymentAddComponent(data: boolean){
    this.componentFour = data;
    this.component = this.componentFour;
  }

  eventCategoryAddComponent(data: boolean){
    this.componentFive = data;
    this.component = this.componentFive;
  }

  eventUpdateInformationUser(data: boolean){
    this.componentSix = data;
    this.component = this.componentSix;
  }

  modalActivate(datos: boolean){
    this.modal = datos;
  }

  modalActivateTwo(datos: boolean){
    this.modal = datos;
  }

}