import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NUMBER_INVOICE, DATE, NAME_INVOICE, METHOD_PAY, TOTAL, OPTION } from "@module/sales/sales-page/component/section-one/constans/section-one"
import { InvoicesReadUseCase } from '@repository/invoice/case/InvoicesReadUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  textTitle = TITLE;
  textNumberInvoice = NUMBER_INVOICE;
  textDate = DATE;
  textNameInvoice = NAME_INVOICE;
  textMethodPay = METHOD_PAY;
  textTotal = TOTAL;
  textOption = OPTION;

  invoice!: InvoiceModel;
  invoiceModel: InvoiceModel [] = [];

  constructor(private invoicesReadUseCase: InvoicesReadUseCase){}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this.invoicesReadUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let resItem of res.objectResponse){
          this.invoice = resItem;
          this.invoiceModel.push(this.invoice);
        }
      }
    )
  }
}
