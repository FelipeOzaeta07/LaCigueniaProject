import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CustomerModel } from '@commons/domains/model/customer/CustomerModel';
import { DetailModel } from '@commons/domains/model/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/model/invoice/InvoiceModel';
import { ProductModel } from '@commons/domains/model/product/ProductModel';

@Component({
  selector: 'app-invoicing-page',
  templateUrl: './invoicing-page.component.html',
  styleUrls: ['./invoicing-page.component.scss']
})
export class InvoicingPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;
  customer!: CustomerModel;
  numberAmount: number = 1;
  totalPriceProducts: number = 0;
  detail!: DetailModel;
  detailInvoice: DetailModel [] = [];
  hashMap: { [productItem: string]: number } = {};
  invoiceEnd!: InvoiceModel;
  currentDate: string;

  constructor(){
    const today = new Date();
    this.currentDate = today.toISOString().slice(0, 10);
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean) {
    console.log("Prueba envio del modal 3 al padre: ");
    this.modalThree = datos;
  }

  getCustomerId(lastCustomerId: CustomerModel){
    this.customer = lastCustomerId;
  }

  selectProducts(product: ProductModel) {
    const productName = product.productName;

    if (this.hashMap.hasOwnProperty(productName)) {
      this.hashMap[productName] += this.numberAmount;
    } else {
      this.hashMap[productName] = this.numberAmount;
    }

    const existingIndex = this.detailInvoice.findIndex(
      (detail) => 
      detail.productEntity.productName === productName
    );

    if (existingIndex !== -1) {
      this.detailInvoice[existingIndex].detailAmount = this.hashMap[productName];
      this.totalPriceProducts += this.detailInvoice[existingIndex].detailSubTotal;
    } else {
      this.detail = {
        detailId: 0,
        detailAmount: this.hashMap[productName],
        detailSubTotal: product.productPrice,
        productEntity: product,
        invoiceEntity: this.invoiceEnd,
      };
      this.totalPriceProducts += this.detail.detailSubTotal;
      this.setDetailModel(this.detail);
    }
    this.builderInvoice();
  }

  setDetailModel(detail: DetailModel) {
    this.detailInvoice.push(detail);
  }

  builderInvoice(){
    this.invoiceEnd = {
      invoiceId: 0,
      invoiceDate: this.currentDate,
      invoiceIva: (this.totalPriceProducts * 16) / 100,
      invoiceTotal: this.totalPriceProducts,
      customerEntity: this.customer
    }
  }
}