import { Component } from '@angular/core';
import { TITLE, NUMBER_INVOICE, DATE, NAME_INVOICE, METHOD_PAY, TOTAL, OPTION } from "@module/sales/sales-page/component/section-one/constans/section-one"

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  title = TITLE;
  numberInvoice = NUMBER_INVOICE;
  date = DATE;
  nameInvoice = NAME_INVOICE;
  methodPay = METHOD_PAY;
  total = TOTAL;
  option = OPTION;
}
