import { Component } from '@angular/core';
import { SUBTITLE, TITLE } from '@module/login/login-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  title = TITLE;
  subtitle = SUBTITLE;
}
