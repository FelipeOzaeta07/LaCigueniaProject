import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { DetailModel } from '@commons/domains/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, CUSTOMER, TOTAL_TABLE, SUBTOTAL_TABLE, PAY, SYMBOL } 
from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent{

  @Input() errorCustomer!: boolean;
  @Input() totalIVA: number = 0;
  @Input() totalPriceProducts: number = 0;
  @Input() detailInvoice: DetailModel [] = [];
  @Input() customer!: CustomerModel;
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendCustomer = new EventEmitter<CustomerModel>();
  @Output() sendCustomerId = new EventEmitter<string>();
  @Output() addition = new EventEmitter<{index: number, valor: number}>();
  @Output() subtract = new EventEmitter<{index: number, valor: number}>();

  invoice!: InvoiceModel;

  textTotal = TOTAL;
  textSubTotal = SUBTOTAL;
  textIva = IVA;
  textProduct = PRODUCT;
  textAmount = AMOUNT;
  textTotalTable = TOTAL_TABLE;
  textSubTotalTable = SUBTOTAL_TABLE;
  textPay = PAY;
  textSymbol = SYMBOL;
  textCoinIva: number = 16;
  textCustomer = CUSTOMER;

  identificationCustomer!: string;
  errorMessage: string = "No se ha encontrado el cliente que estás buscando";


  constructor(){ }

  updateCalculatedValue(detailItem: DetailModel): number{
    return detailItem.detailSubTotal * detailItem.detailAmount;
  }

  getCustomer() {
    this.sendCustomerId.emit(this.identificationCustomer);
  }

  modalEventOne(){
    this.modalActivateOne.emit(true);
  }

  modalEventTwo(){
    this.modalActivateTwo.emit(true);
  }

  eventAddition(i: number){
    let valor = 1;
    let index = i;
    this.addition.emit({index, valor});
  }

  eventSubtract(i: number){
    if( this.detailInvoice[i].detailAmount > 0)
    {
      let valor = 1;
      let index = i;
      this.subtract.emit({index, valor});
    }
  }

  modalEdit(){
    this.sendCustomer.emit(this.customer);
    this.modalActivateOne.emit(true);
  }
}
