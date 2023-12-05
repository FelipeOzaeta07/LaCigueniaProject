import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DONE, FAIL, TITLE } from './constans/modal-two';
import { DeleteSupplierUseCase } from '@repository/supplier/case/DeleteSupplierUseCase';
import { GenericResponse } from '@commons/response/GenericResponse';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() supplierId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteSupplierUseCase: DeleteSupplierUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteProduct() {
    this.deleteSupplierUseCase.execute(this.supplierId).subscribe(
      (res: GenericResponse) => {
        console.log("Proovedor Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateTwo.emit(false);
  }
}