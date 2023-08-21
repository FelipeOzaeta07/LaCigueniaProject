import { Component } from '@angular/core';
import { OPENING_BOX_AFTER, TITLE, TOTAL_SALES_DAY, INFORMATION } from '@module/opening/opening-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  title = TITLE;
  openingBoxAfter = OPENING_BOX_AFTER;
  totalSalesDay = TOTAL_SALES_DAY;
  information = INFORMATION;
}
