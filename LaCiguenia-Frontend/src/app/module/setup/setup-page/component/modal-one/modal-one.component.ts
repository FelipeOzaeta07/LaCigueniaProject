import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TITLE, DONE } 
from '@module/setup/setup-page/component/modal-one/constans/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivate = new EventEmitter<boolean>();
  @Input() message!: string;

  textTitle = TITLE;
  textDone = DONE;

  modalEvent() {
    this.modalActivate.emit(false);
  }

}