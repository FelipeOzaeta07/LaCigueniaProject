import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { DetailModel } from '@commons/domains/model/detail/DetailModel';
import { ProductModel } from '@commons/domains/model/product/ProductModel';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, TOTAL_TABLE, SUBTOTAL_TABLE, PAY } from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'


@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent{

  @Input() detailInvoice: DetailModel [] = [];
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTotal = TOTAL;
  textSubTotal = SUBTOTAL;
  textIva = IVA;
  textProduct = PRODUCT;
  textAmount = AMOUNT;
  textTotalTable = TOTAL_TABLE;
  textSubTotalTable = SUBTOTAL_TABLE;
  textPay = PAY;

  modalEventOne(){
    const datos = true;
    this.modalActivateOne.emit(datos);
  }

  modalEventTwo(){
    const datos = true;
    this.modalActivateTwo.emit(datos);
  }
}
