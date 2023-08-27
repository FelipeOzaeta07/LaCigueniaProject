import { Component, EventEmitter, Output } from '@angular/core';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, TOTAL_TABLE, SUBTOTAL_TABLE, PAY } from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'


@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTotal = TOTAL;
  textSubTotal = SUBTOTAL;
  textIva = IVA;
  textProduct = PRODUCT;
  textAmount = AMOUNT;
  textTotalTable = TOTAL_TABLE;
  textSubTotalTable = SUBTOTAL_TABLE;
  pay = PAY;

  nombreProducto: string = "nombre";
  cantidad: number = 0;
  total: number = 0;
  subtotal: number = 0;

  modalEventOne(){
    console.log("Prueba Entro al Metodo: ")
    const datos = true;
    this.modalActivateOne.emit(datos);
  }
  modalEventTwo(){
    console.log("Prueba Entro al Metodo: ")
    const datos = true;
    this.modalActivateTwo.emit(datos);
  }
}
