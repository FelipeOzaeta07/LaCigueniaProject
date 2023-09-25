import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailProductInvoice } from '@commons/domains/detail/DetailProductInvoice';
import { GenericResponse } from '@commons/response/GenericResponse';
import { NUMBER, TITLE, DATE, CUSTOMER_NAME, IDENTIFICATION, NUMBER_DETAIL, PRODUCT_NAME,
        PRODUCT_PRICE, AMOUNT, IVA, TOTAL, METHOD_PAY, TOTAL_IVA,TOTAL_PAY, SYMBOL, DONE } 
        from '@module/sales/sales-page/component/modal-one/constans/modal-one';
import { DetailReadUseCase } from '@repository/detail/case/DetailReadUseCase';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})

export class ModalOneComponent implements OnInit{

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() invoiceId!: number;

  textTitle = TITLE;
  textNumber = NUMBER;
  textDate = DATE;
  textCustomerName = CUSTOMER_NAME;
  textIdentification = IDENTIFICATION;
  textNumberDetail = NUMBER_DETAIL;
  textProductName = PRODUCT_NAME;
  textProductPrice = PRODUCT_PRICE;
  textAmount = AMOUNT;
  textIva = IVA;
  textTotal = TOTAL;
  textMethodPay = METHOD_PAY;
  textTotalIva = TOTAL_IVA;
  textTotalPay = TOTAL_PAY;
  textSymbol = SYMBOL;
  textDone = DONE;

  detailProductInvoice: DetailProductInvoice [] = [];

  constructor(private detailReadUseCase: DetailReadUseCase){}

  ngOnInit(): void {
    this.detailRead();
    console.log("Tamaño del arreglo: " + this.detailProductInvoice.length)
  }

  detailRead(){
    this.detailReadUseCase.execute(this.invoiceId).subscribe(
      (res: GenericResponse) => {
        for (let invoiceItem of res.objectResponse){
          this.detailProductInvoice.push(invoiceItem);
        }
      }
    )
  }

  modalEvent(){
    this.modalActivateOne.emit(false);
  }
}
