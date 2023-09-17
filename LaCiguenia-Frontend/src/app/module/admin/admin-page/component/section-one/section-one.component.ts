import { Component, Input } from '@angular/core';
import { EXPENSES_DAY, NU_INVOICE, SALES_DAY, STORE, UTILITY_DAY, SYMBOL } from '@module/admin/admin-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  @Input() salesTotalDay!: number;

  textGeneral = "La Ciguenia Calle 48";
  textStore = STORE;
  textSalesDay = SALES_DAY;
  textNumberInvoice = NU_INVOICE;
  textExpensesDay = EXPENSES_DAY;
  textUtilityDay = UTILITY_DAY;
  textSymbol = SYMBOL;





}
