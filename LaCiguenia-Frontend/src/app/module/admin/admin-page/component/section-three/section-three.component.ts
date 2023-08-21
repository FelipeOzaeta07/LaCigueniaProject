import { Component } from '@angular/core';
import { EXPENSES_MONTH, NU_INVOICE_MONTH, SALES_MONTH, UTILITY_MONTH, TITLE } from '@module/admin/admin-page/component/section-three/constans/section-three';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {
  salesMonth = SALES_MONTH;
  numberInvoices = NU_INVOICE_MONTH;
  expensesMonth = EXPENSES_MONTH;
  utilityMonth = UTILITY_MONTH;
  title = TITLE;
}
