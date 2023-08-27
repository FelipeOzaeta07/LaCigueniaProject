import { Component } from '@angular/core';
import { TITLE } from '@module/register/register-page/component/section-two/constans/section-two'

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  textTitle = TITLE;
}
