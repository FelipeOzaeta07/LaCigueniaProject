import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CustomerModel } from '@commons/domains/model/customer/CustomerModel';
import { DetailModel } from '@commons/domains/model/detail/DetailModel';
import { InvoiceModel } from '@commons/domains/model/invoice/InvoiceModel';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, TOTAL_TABLE, SUBTOTAL_TABLE, PAY, SYMBOL } from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'


@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent{

  @Input() totalPriceProducts: number = 0;
  @Input() detailInvoice: DetailModel [] = [];
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();

  invoice!: InvoiceModel;
  customer!: CustomerModel;
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

  updateCalculatedValue(detailItem: DetailModel): number{
    return detailItem.detailSubtotal * detailItem.detailAmount;
  }

  modalEventOne(){
    const datos = true;
    this.modalActivateOne.emit(datos);
  }

  modalEventTwo(){
    const datos = true;
    this.modalActivateTwo.emit(datos);
  }
}
