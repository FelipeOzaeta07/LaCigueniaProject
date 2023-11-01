import { Component } from '@angular/core';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { DetailModel } from '@commons/domains/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CustomerReadUseCase } from '@repository/customer/case/CustomerReadUseCase';
import { SendOpeningService } from '@service/opening/implement/SendOpeningService';

@Component({
  selector: 'app-invoicing-page',
  templateUrl: './invoicing-page.component.html',
  styleUrls: ['./invoicing-page.component.scss']
})
export class InvoicingPageComponent {

  totalIVA: number = 0;

  modalOne!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;
  modalFour!: boolean;

  sendProductCategory: ProductModel[] = [];
  customerUpdate!: CustomerModel;
  customer!: CustomerModel;
  numberAmount: number = 1;
  totalPriceProducts: number = 0;
  invoiceEnd!: InvoiceModel;
  currentDate: string;
  productSelector: string = '';
  messageCategory!: boolean;
  updateCustomer: boolean = false;
  errorCustomer: boolean = false;
  
  detail!: DetailModel;
  detailInvoice: DetailModel [] = [];
  hashMap: { [productItem: string]: number } = {};


  constructor(private sendOpeningService: SendOpeningService, private customerReadUseCase: CustomerReadUseCase){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
    this.builderInvoice();
  }

  activeMessageCategory(datos: boolean){
    this.messageCategory = datos;
  }

  sendCustomerUpdate(customer: CustomerModel){
    this.customerReadUseCase.execute(customer.customerIdentification).subscribe(
      (res: GenericResponse) => {
        this.customer = res.objectResponse
      }
    )
  }

  sendCustomerId(id: string){
    this.customerReadUseCase.execute(id).subscribe(
      (res: GenericResponse) => {
        this.errorCustomer = false;
        this.customer = res.objectResponse;
      },(error) => {
        this.errorCustomer = true;
      }
    )
  }

  sendCustomer(customer: CustomerModel){
    this.customerUpdate = customer;
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  modalActivateFour(datos: boolean){
    this.modalFour = datos;
  }

  modalActivateFive(datos: boolean){
    this.modalFour = datos;
    this.updateCustomer = true;
  }

  getCustomerId(lastCustomerId: CustomerModel){
    this.customerReadUseCase.execute(lastCustomerId.customerIdentification).subscribe(
      (res: GenericResponse) => {
        this.errorCustomer = false;
        this.customer = res.objectResponse;
      }
    )
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
      this.totalIVA += (
        this.detailInvoice[existingIndex].productEntity.productPrice 
        * this.detailInvoice[existingIndex].productEntity.productIva)/100
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
      this.totalIVA += this.detail.detailAmount * (
        this.detail.productEntity.productPrice 
        * this.detail.productEntity.productIva)/100
    }
    
  }

  setDetailModel(detail: DetailModel) {
    this.detailInvoice.push(detail);
  }

  builderInvoice(){
    this.invoiceEnd = {
      invoiceId: 0,
      invoiceDate: this.currentDate,
      invoiceIva: this.totalIVA,
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
      openingEntity: this.sendOpeningService.getOpeningModel(),
      paymentMethodEntity: {
        paymentMethodId: 0, 
        paymentMethodName: '',
        paymentMethodDescription: ''
      }
    }
  }

  sendProductSelector(productSelector: string){
    this.productSelector = productSelector;
  }

  sendProduct(product: ProductModel[]){
    this.sendProductCategory = product;
  }

  addition(eventData: { index: number; valor: number }){
    this.detailInvoice[eventData.index].detailAmount += eventData.valor;
    this.selectProducts(this.detailInvoice[eventData.index].productEntity)
    this.totalIVA = this.detailInvoice[eventData.index].detailAmount * (
      this.detailInvoice[eventData.index].productEntity.productPrice 
      * this.detailInvoice[eventData.index].productEntity.productIva)/100
  }

  subtract(eventData: { index: number; valor: number }) {
    const product = this.detailInvoice[eventData.index].productEntity;
    const productName = product.productName;
  
    if (this.hashMap.hasOwnProperty(productName) && this.hashMap[productName] > 0) {
      this.hashMap[productName] -= eventData.valor;
      this.detailInvoice[eventData.index].detailAmount -= eventData.valor;
      this.totalPriceProducts -= this.detailInvoice[eventData.index].detailSubTotal;
      this.totalIVA -=  (
        this.detailInvoice[eventData.index].productEntity.productPrice 
        * this.detailInvoice[eventData.index].productEntity.productIva)/100
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

  emitAmount(eventData: { product: ProductModel; number: number, i: number }){

    if(this.detailInvoice.length != 0){
      this.hashMap[eventData.product.productName] = 0;
      for(let i = 0; i < eventData.number; i++){
        this.selectProducts(eventData.product)
      }
    }else{
      for(let i = 0; i < eventData.number; i++){
        this.selectProducts(eventData.product)
      }
    }
  }
}