import { Component } from '@angular/core';
import { EXPENSES_DAY, NU_INVOICE, SALES_DAY, STORE, UTILITY_DAY } from '@module/admin/admin-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  general = "La Ciguenia Calle 48";
  store = STORE;
  salesDay = SALES_DAY;
  numberInvoice = NU_INVOICE;
  expensesDay = EXPENSES_DAY;
  utilityDay = UTILITY_DAY;
}
