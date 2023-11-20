import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, DONE, FAIL } from '@module/setup/setup-page/component/modal-two/constans/modal-two';
import { DeleteUserUseCase } from '@repository/user/case/DeleteUserUseCase';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() userId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteUserUseCase: DeleteUserUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteUser() {
    this.deleteUserUseCase.execute(this.userId).subscribe(
      (res: GenericResponse) => {
        console.log("Usuario Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateTwo.emit(false);
  }
}