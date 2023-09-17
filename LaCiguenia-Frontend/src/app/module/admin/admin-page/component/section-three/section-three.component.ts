import { Component, Input } from '@angular/core';
import { EXPENSES_MONTH, NU_INVOICE_MONTH, SALES_MONTH, UTILITY_MONTH, TITLE, SYMBOL } from '@module/admin/admin-page/component/section-three/constans/section-three';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  @Input() salesTotalMonth!:number;

  textTitle = TITLE;
  textSalesMonth = SALES_MONTH;
  textNumberInvoices = NU_INVOICE_MONTH;
  textExpensesMonth = EXPENSES_MONTH;
  textProfitMonth = UTILITY_MONTH;
  textSymbol = SYMBOL;
}
