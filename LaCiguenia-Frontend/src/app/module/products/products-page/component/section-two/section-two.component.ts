import { Component, EventEmitter, Output } from '@angular/core';
import { NAME_PRODUCT, TITLE, SALES_PRICE, AMOUNT, OPTION } from '@module/products/products-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  @Output() modalActivate = new EventEmitter<boolean>();

  title = TITLE;
  nameProduct = NAME_PRODUCT;
  salesPrices = SALES_PRICE;
  amount = AMOUNT;
  option = OPTION;



  modalEvent(){
    const datos = true;
    this.modalActivate.emit(datos);
  }

}
