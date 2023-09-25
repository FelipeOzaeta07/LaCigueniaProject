import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceDeleteUseCase } from '@repository/invoice/case/InvoiceDeleteUseCase';
import { TITLE, DONE, FAIL } from '@module/sales/sales-page/component/modal-two/constans/modal-two';
import { GenericResponse } from '@commons/response/GenericResponse';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() invoiceId!: number;

  textTitle = TITLE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private invoiceDeleteUseCase: InvoiceDeleteUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteProduct() {
    this.invoiceDeleteUseCase.execute(this.invoiceId).subscribe(
      (res: GenericResponse) => {
        console.log("Respuesta Correcta: " + res.message);
      }
    )
    this.modalActivateTwo.emit(false);
  }
}
