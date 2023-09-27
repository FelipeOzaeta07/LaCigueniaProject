import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { DetailModel } from '@commons/domains/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { SendOpeningService } from '@service/opening/implement/SendOpeningService';

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
  invoiceEnd!: InvoiceModel;
  currentDate: string;
  productSelector: string = '';
  
  detail!: DetailModel;
  detailInvoice: DetailModel [] = [];
  productGroupsSelector!: ProductModel [][];
  hashMap: { [productItem: string]: number } = {};


  constructor(private sendOpeningService: SendOpeningService){
    const today = new Date();
    this.currentDate = today.toISOString().slice(0, 10);
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
    this.builderInvoice();
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
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
    } 
    else {
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
  }

  setDetailModel(detail: DetailModel) {
    this.detailInvoice.push(detail);
  }

  builderInvoice(){
    this.invoiceEnd = {
      invoiceId: 0,
      invoiceDate: this.currentDate,
      invoiceIva: (this.totalPriceProducts * 16) / 100,
      invoicePay: '',
      invoiceTotal: this.totalPriceProducts,
      invoiceStatus: "Pagado",
      customerEntity: this.customer != null
        ? this.customer
        : { customerId: 1,
            customerName: "Cliente General",
            customerIdentification: "123456789",
            customerPhoneNumber: "3001101010",
            customerEmail: "general@example.com",
            customerAddress: "Calle Principal 123",
        },
      openingEntity: this.sendOpeningService.getOpeningModel()
    }
  }

  sendProductSelector(productSelector: string){
    this.productSelector = productSelector;
  }

  addition(eventData: { index: number; valor: number }){
    this.detailInvoice[eventData.index].detailAmount += eventData.valor;
    this.selectProducts(this.detailInvoice[eventData.index].productEntity)
  }

  subtract(eventData: { index: number; valor: number }) {
    const product = this.detailInvoice[eventData.index].productEntity;
    const productName = product.productName;
  
    if (this.hashMap.hasOwnProperty(productName) && this.hashMap[productName] > 0) {
      this.hashMap[productName] -= eventData.valor;
      this.detailInvoice[eventData.index].detailAmount -= eventData.valor;
      this.totalPriceProducts -= this.detailInvoice[eventData.index].detailSubTotal;
  
      if (this.hashMap[productName] === 0) {
        const existingIndex = this.detailInvoice.findIndex(
          (detail) => detail.productEntity.productName === productName
        );
  
        if (existingIndex !== -1) {
          this.detailInvoice.splice(existingIndex, 1);
        }
      }
    }
  }
}