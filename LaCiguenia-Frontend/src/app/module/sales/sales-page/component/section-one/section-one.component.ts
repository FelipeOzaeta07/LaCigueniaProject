import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NUMBER_INVOICE, DATE, TEXT_OPENING_BOX, TEXT_TITLE, TEXT_ONE, TEXT_TWO, TEXT_THREE, NAME_INVOICE, METHOD_PAY, TOTAL, OPTION } 
from "@module/sales/sales-page/component/section-one/constans/section-one"
import { ReadInvoiciesUseCase } from '@repository/invoice/case/ReadInvoiciesUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendInvoiceModel = new EventEmitter<number>();
  @Input() activeMessage!: boolean;

  textTitle = TITLE;
  textNumberInvoice = NUMBER_INVOICE;
  textDate = DATE;
  textNameInvoice = NAME_INVOICE;
  textMethodPay = METHOD_PAY;
  textTotal = TOTAL;
  textOption = OPTION;
  textSubTitle = TEXT_TITLE;
  textItemOne = TEXT_ONE;
  textItemTwo = TEXT_TWO;
  textItemThree = TEXT_THREE;
  textOpeningBox = TEXT_OPENING_BOX;

  invoice!: InvoiceModel;
  invoiceModel: InvoiceModel [] = [];
  message: boolean = true;

  constructor(private readInvoiciesUseCase: ReadInvoiciesUseCase){}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this.readInvoiciesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        if(res.message != "Operación fallida"){
          this.message = false;
        }
        for(let resItem of res.objectResponse){
          this.invoice = resItem;
          this.invoiceModel.push(this.invoice);
        }
      }
    )
  }

  modalDelete(index: number){
    this.sendInvoiceModel.emit(index + 1)
    this.modalActivateTwo.emit(true);
  }

  modalEvent(index: number){
    this.sendInvoiceModel.emit(index + 1)
    this.modalActivateOne.emit(true);
  }
}
