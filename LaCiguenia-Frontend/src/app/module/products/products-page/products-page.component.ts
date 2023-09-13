import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  modal!: boolean;
  modalTwo!: boolean;

  modalActivate(datos: boolean) {
    this.modal = datos;
  }

  modalActivateTwo(datos: boolean){
    this.modalTwo = datos;
  }
}
