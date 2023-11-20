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
  componentSeven!: boolean;
  modal!: boolean;
  modalTwo!: boolean;
  message!: string;
  userId!: number;

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
    if(this.componentSeven == true){
      this.componentSeven = false;
    }
    this.componentSix = data;
    this.component = this.componentSix;
  }

  eventDeleteInformationUser(data: boolean){
    if(this.componentSix == true){
      this.componentSix = false;
    }
    this.componentSeven = data;
    this.component = this.componentSeven;
  }

  sendMessage(message: string){
    this.message = message;
  }

  sendUserId(index: number){
    this.userId = index;
  }

  modalActivate(datos: boolean){
    this.modal = datos;
    if(datos == false){
      window.location.reload();
    }
  }

  modalActivateTwo(datos: boolean){
    this.modalTwo = datos;
    if(datos == false){
      window.location.reload();
    }
  }
}