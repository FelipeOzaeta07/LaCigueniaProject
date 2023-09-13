import { Component, EventEmitter, Output } from '@angular/core';
import { NAME_PRODUCT, TITLE, PRICE, AMOUNT, CATEGORY, DESCRIPTION, EDIT, FAIL, DATE } from '@module/admin/admin-page/component/modal-one/constans/modal-one'
import { CODE, PRICE_SALE } from '@module/products/products-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPriceSale = PRICE_SALE;
  textAmount = AMOUNT;
  textDescription = DESCRIPTION;
  textCategory = CATEGORY;
  textCode = CODE;
  textDate = DATE;
  textEdit = EDIT;
  textFail = FAIL;
  
  @Output() modalActivate = new EventEmitter<boolean>();

  modalEvent() {
    const datos = false;
    this.modalActivate.emit(datos);
  }

}