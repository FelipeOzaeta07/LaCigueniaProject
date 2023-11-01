import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE_DELETE, DONE, FAIL } 
from '@module/expense/expense-page/component/modal-three/constans/modal-three';
import { DeleteExpenseUseCase } from '@repository/expense/case/DeleteExpenseUseCase';

@Component({
  selector: 'app-modal-three',
  templateUrl: './modal-three.component.html',
  styleUrls: ['./modal-three.component.scss']
})
export class ModalThreeComponent {
  
  @Output() modalActivateThree = new EventEmitter<boolean>();
  @Input() expensiveId!: number;

  textTitleDelete = TITLE_DELETE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteExpenseUseCase: DeleteExpenseUseCase){}

  modalEvent() {
    this.modalActivateThree.emit(false);
  }

  deleteExpensive() {
    this.deleteExpenseUseCase.execute(this.expensiveId).subscribe(
      (res: GenericResponse) => {
        console.log("Gasto Eliminado Correctamente " + res.message)
      }
    );
    this.modalActivateThree.emit(false);
  }
}