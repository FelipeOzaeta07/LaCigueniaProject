import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TITLE_TWO, DONE, TITLE_ONE } from '@module/invoicing/invoicing-page/component/modal-four/constans/modal-four';

@Component({
  selector: 'app-modal-four',
  templateUrl: './modal-four.component.html',
  styleUrls: ['./modal-four.component.scss']
})
export class ModalFourComponent {
  
  @Input() updateCustomer!: boolean;
  @Output() modalActivateFour = new EventEmitter<boolean>();
  @Output() modalActivateFive = new EventEmitter<boolean>();

  textTitle = TITLE_ONE;
  textTitleUpdate = TITLE_TWO;
  textDone = DONE;


  modalEvent() {
    this.modalActivateFour.emit(false);
  }

  modalEventTwo() {
    this.modalActivateFive.emit(false);
  }

}
