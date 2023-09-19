import { Component } from '@angular/core';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent {

  modalOne!: boolean;
  invoiceId!: number;

  modalActivateOne(datos: boolean){
    this.modalOne = datos;
  }

  sendInvoiceModel(invoiceId: number){
    console.log("Prueba Datos: " + invoiceId)
    this.invoiceId = invoiceId;
  }
}