import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailProductMoreSold } from '@commons/domains/detail/DetailProductMoreSold';
import { NAME_PRODUCT, TITLE, AMOUNT, CATEGORY, DESCRIPTION, EDIT, FAIL, DATE, EXIST, NUMBER, INFORMATION } from '@module/admin/admin-page/component/modal-one/constans/modal-one'
import { CODE, PRICE_SALE } from '@module/products/products-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() product!: DetailProductMoreSold;

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPriceSale = PRICE_SALE;
  textAmount = AMOUNT;
  textInformation = INFORMATION;
  textDescription = DESCRIPTION;
  textCategory = CATEGORY;
  textNumber = NUMBER;
  textDate = DATE;
  textExist = EXIST;
  textEdit = EDIT;
  textFail = FAIL;
  date: string = new Date().toISOString().slice(0, 10);

  modalEvent() {
    this.modalActivateOne.emit(false);
  }

}