import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DeleteProductUseCase } from '@repository/product/case/DeleteProductUseCase';
import { DONE, FAIL, TITLE } from './constans/modal-two';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() productId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteProductUseCase: DeleteProductUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteProduct() {
    this.deleteProductUseCase.execute(this.productId).subscribe(
      (res: GenericResponse) => {
        console.log("Producto Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateTwo.emit(false);
  }
}
