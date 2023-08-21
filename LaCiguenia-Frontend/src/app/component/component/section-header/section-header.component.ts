import { Component } from '@angular/core';
import { WHATSAPP } from '@app/component/component/section-header/constans/section-header';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  whatsApp = WHATSAPP;
}
