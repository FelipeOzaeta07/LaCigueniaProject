import { Component } from '@angular/core';
import { AMOUNT, CATEGORY, DESCRIPTION, IVA, NAME_PRODUCT, PRICE, SAVE, TITLE } from '@module/products/products-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  title = TITLE;
  nameProduct = NAME_PRODUCT;
  price = PRICE;
  iva = IVA;
  amount = AMOUNT;
  category = CATEGORY;
  description = DESCRIPTION;
  pay = SAVE;
}
