import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, DONE, FAIL } from '@module/supplier/supplier-page/component/modal-three/constans/modal-three';
import { DeleteSupplierUseCase } from '@repository/supplier/case/DeleteSupplierUseCase';

@Component({
  selector: 'app-modal-three',
  templateUrl: './modal-three.component.html',
  styleUrls: ['./modal-three.component.scss']
})
export class ModalThreeComponent {
  
  @Output() modalActivateThree = new EventEmitter<boolean>();
  @Input() supplierId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteSupplierUseCase: DeleteSupplierUseCase){}

  modalEvent() {
    this.modalActivateThree.emit(false);
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
    this.modalActivateThree.emit(false);
  }
}