import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivate = new EventEmitter<boolean>();

  modalEvent() {
    this.modalActivate.emit(false);
  }

}
