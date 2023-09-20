import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteInventoryUseCase } from '@repository/inventory/case/DeleteInventoryUseCase';
import { TITLE, DONE, FAIL } from '@module/inventory/inventory-page/component/modal-two/constans/modal-two';
import { GenericResponse } from '@commons/response/GenericResponse';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() inventoryId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteInventoryUseCase: DeleteInventoryUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteProduct() {
    this.deleteInventoryUseCase.execute(this.inventoryId).subscribe(
      (res: GenericResponse) => {
        console.log("Inventario Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateTwo.emit(false);
  }

}
