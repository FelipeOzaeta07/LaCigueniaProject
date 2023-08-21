import { Component } from '@angular/core';
import { IVA, SUBTOTAL, TOTAL, PRODUCT, AMOUNT, TOTAL_TABLE, SUBTOTAL_TABLE, PAY } from '@module/invoicing/invoicing-page/component/section-three/constans/section-three'


@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {
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
}
