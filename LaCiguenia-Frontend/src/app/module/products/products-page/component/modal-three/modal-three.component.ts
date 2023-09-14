import { Component, EventEmitter, Output } from '@angular/core';
import { TITLE, DONE } from '@module/products/products-page/component/modal-three/constans/model-three';

@Component({
  selector: 'app-modal-three',
  templateUrl: './modal-three.component.html',
  styleUrls: ['./modal-three.component.scss']
})
export class ModalThreeComponent {

  @Output() modalActivateThree = new EventEmitter<boolean>();

  textTitle = TITLE;
  textDone = DONE;

  modalEvent() {
    this.modalActivateThree.emit(false);
  }

}
