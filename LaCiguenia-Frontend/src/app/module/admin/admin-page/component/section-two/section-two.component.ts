import { Component } from '@angular/core';
import { TITLE, UNIT } from '@module/admin/admin-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  title = TITLE;
  unit = UNIT;
  product = "Nombre del producto";
}
