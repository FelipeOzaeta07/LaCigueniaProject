import { Component, EventEmitter, Output } from '@angular/core';
import { TITLE, NAME_PRODUCT, PRICE, IVA, DESCRIPTION, CODE, AMOUNT, FAIL, DONE } from '@module/products/products-page/component/modal-one/constans/modal-one'

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPrice = PRICE;
  textIva = IVA;
  textDescription = DESCRIPTION;
  textCode = CODE;
  textAmount = AMOUNT;
  textFail = FAIL;
  textDone = DONE;

  modalEvent() {
    const datos = false;
    this.modalActivate.emit(datos);
  }
}
