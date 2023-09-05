import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceModel } from '@commons/domains/model/invoice/InvoiceModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { SYMBOL_PRICE, TITLE, SUBTOTAL, IVA, TOTAL, DISCOUNT, ADD_PAY, CHANGE, FAIL, PAY} from '@module/invoicing/invoicing-page/component/modal-two/constans/modal-two';
import { InvoiceCreateUseCase } from '@repository/invoice/case/InvoiceCreateUseCase';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Input() invoiceEnd!: InvoiceModel;
  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTitle = TITLE;
  textSubtotal = SUBTOTAL;
  textSymbolPrice =SYMBOL_PRICE;
  textIva = IVA;
  textTotal = TOTAL;
  textDiscount = DISCOUNT;
  textAddPay = ADD_PAY;
  textChange = CHANGE;
  textFail = FAIL;
  textPay = PAY;

  constructor(private invoiceCreateUseCase: InvoiceCreateUseCase){

  }

  generalPay(){
    console.log("Prueba Datos Para Generar Factura: ");
    console.log("Fecha: " + this.invoiceEnd.invoiceDate);
    console.log("Iva: " + this.invoiceEnd.invoiceIva);
    console.log("Total: " + this.invoiceEnd.invoiceTotal);
    console.log("Nombre Producto: " + this.invoiceEnd.listDetail[0].productId.productName);
    console.log("Precio Producto: " + this.invoiceEnd.listDetail[0].productId.productPrice);
    console.log("Nombre Cliente: " + this.invoiceEnd.customerEntity.customerName);

    this.invoiceCreateUseCase.execute(this.invoiceEnd).subscribe(
      (res: GenericResponse) => {
        console.log("Respuesta: " + res.message);
      }
    )


  }


  modalEventTwo() {
    const datos = false;
    this.modalActivateTwo.emit(datos);
  }
}
