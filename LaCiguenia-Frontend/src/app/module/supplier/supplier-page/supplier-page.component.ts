import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent {
  modalOne!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;

  modalActivate(datos: boolean){
    this.modalOne = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
  }
}