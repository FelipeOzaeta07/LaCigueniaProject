import { Component } from '@angular/core';
import { AMOUNT, CODE, NAME_PRODUCT, OPTIONS, PAGING, SALES_PRICE, TITLE } from '@module/inventory/inventory-page/component/section-one/constans/section-one'

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  title = TITLE;
  nameProduct = NAME_PRODUCT;
  code = CODE;
  salesPrice = SALES_PRICE;
  amount = AMOUNT;
  options = OPTIONS;
  paging = PAGING;
  
  

}
