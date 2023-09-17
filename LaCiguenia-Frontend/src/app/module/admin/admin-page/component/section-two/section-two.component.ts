import { Component, EventEmitter, Output } from '@angular/core';
import { TITLE, UNIT } from '@module/admin/admin-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();


  title = TITLE;
  unit = UNIT;
  product = "Nombre del producto";

  modalEvent(){
    const datos = true;
    this.modalActivateOne.emit(datos);
  }
}
