import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { DetailModel } from '@commons/domains/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, CUSTOMER, TOTAL_TABLE, SUBTOTAL_TABLE, PAY, SYMBOL } from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'


@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent{

  @Input() totalPriceProducts: number = 0;
  @Input() detailInvoice: DetailModel [] = [];
  @Input() customer!: CustomerModel;
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();

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

  updateCalculatedValue(detailItem: DetailModel): number{
     return detailItem.detailSubTotal * detailItem.detailAmount;
    
  }


getTotal(): number {
  let total = 0;
  for (const detailItem of this.detailInvoice) {
    total += this.updateCalculatedValue(detailItem);
  }
  return total;
}

getIva() : number {
  let total = 0;
  for (const detailItem of this.detailInvoice) {
    
  }
  return total;
}

  modalEventOne(){
    this.modalActivateOne.emit(true);
  }

  modalEventTwo(){
    this.modalActivateTwo.emit(true);
  }
  modalEventTwoSum(detailItem: DetailModel){
      detailItem.detailAmount += 1
      this.updateCalculatedValue(detailItem);
  }

  modalEventTwoSub(detailItem: DetailModel){
    if( detailItem.detailAmount > 0)
    {
        detailItem.detailAmount -= 1
        this.updateCalculatedValue(detailItem);
    }
}
}