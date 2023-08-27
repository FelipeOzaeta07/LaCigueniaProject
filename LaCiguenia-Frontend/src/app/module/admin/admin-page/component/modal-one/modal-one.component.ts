import { Component, EventEmitter, Output } from '@angular/core';
import { NAME_PRODUCT, TITLE, PRICE, AMOUNT, CATEGORY, DESCRIPTION, DONE } from '@module/admin/admin-page/component/modal-one/constans/modal-one'

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPrice = PRICE;
  textAmount = AMOUNT;
  textDescription = DESCRIPTION;
  textCategory = CATEGORY;
  textDone = DONE;
  
  @Output() modalActivate = new EventEmitter<boolean>();

  modalEvent() {
    const datos = false;
    this.modalActivate.emit(datos);
  }

}