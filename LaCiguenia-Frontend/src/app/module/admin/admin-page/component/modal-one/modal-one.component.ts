import { Component, EventEmitter, Output } from '@angular/core';
import { NAME_PRODUCT, TITLE, AMOUNT, CATEGORY, DESCRIPTION, EDIT, FAIL, DATE, EXIST, NUMBER } from '@module/admin/admin-page/component/modal-one/constans/modal-one'
import { CODE, PRICE_SALE } from '@module/products/products-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  imageUrl: string = 'LaCiguenia-Front-end/src/assets/Rectangle28.png';

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPriceSale = PRICE_SALE;
  textAmount = AMOUNT;
  textDescription = DESCRIPTION;
  textCategory = CATEGORY;
  textNumber = NUMBER;
  textDate = DATE;
  textExist = EXIST;
  textEdit = EDIT;
  textFail = FAIL;
  
  @Output() modalActivateOne = new EventEmitter<boolean>();

  modalEvent() {
    this.modalActivateOne.emit(false);
  }

}