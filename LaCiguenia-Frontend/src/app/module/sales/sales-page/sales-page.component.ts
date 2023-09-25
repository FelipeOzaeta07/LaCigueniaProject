import { Component } from '@angular/core';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  invoiceId!: number;

  modalActivateOne(datos: boolean){
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean){
    this.modalTwo = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  sendInvoiceModel(invoiceId: number){
    this.invoiceId = invoiceId;
  }
}