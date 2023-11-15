import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TITTLE, DONE } from '@module/supplier/supplier-page/component/modal-one/constans/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {
  
  @Input() modalOne!: boolean;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITTLE;
  textDone = DONE;

  modalEvent() {
    this.modalActivate.emit(false);
  }

}