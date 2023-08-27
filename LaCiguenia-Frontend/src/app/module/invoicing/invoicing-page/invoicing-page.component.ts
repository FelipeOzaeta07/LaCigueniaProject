import { Component } from '@angular/core';

@Component({
  selector: 'app-invoicing-page',
  templateUrl: './invoicing-page.component.html',
  styleUrls: ['./invoicing-page.component.scss']
})
export class InvoicingPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }
  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }
}
