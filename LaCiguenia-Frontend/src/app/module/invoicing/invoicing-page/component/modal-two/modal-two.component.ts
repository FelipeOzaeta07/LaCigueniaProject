import { Component, EventEmitter, Output } from '@angular/core';
import { SYMBOL_PRICE, TITLE, SUBTOTAL, IVA, TOTAL, DISCOUNT, ADD_PAY, CHANGE, FAIL, PAY} from '@module/invoicing/invoicing-page/component/modal-two/constans/modal-two';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTitle = TITLE;
  textSubtotal = SUBTOTAL;
  textSymbolPrice =SYMBOL_PRICE;
  textIva = IVA;
  textTotal = TOTAL;
  textDiscount = DISCOUNT;
  textAddPay = ADD_PAY;
  textChange = CHANGE;
  textFail = FAIL;
  textPay = PAY;


  modalEventTwo() {
    const datos = false;
    this.modalActivateTwo.emit(datos);
  }
}
