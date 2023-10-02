import { Component, OnInit } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { OPENING_BOX_AFTER, TITLE, TOTAL_SALES_DAY, INFORMATION, SYMBOL } 
from '@module/opening/opening-page/component/section-two/constans/section-two';
import { TotalPreviousDayInvoiceUseCase } from '@repository/invoice/case/TotalPreviousDayInvoiceUseCase';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit{
  textTitle = TITLE;
  textOpeningBoxAfter = OPENING_BOX_AFTER;
  textTotalSalesDay = TOTAL_SALES_DAY;
  textInformation = INFORMATION;
  textSymbol = SYMBOL;

  opening: number = 0;
  totalPreviousDay: number = 0;

  constructor(private readLastOpeningUseCase: ReadLastOpeningUseCase, private totalPreviousDayInvoiceUseCase: TotalPreviousDayInvoiceUseCase){}

  ngOnInit(): void {
    this.readLastOpening();
    this.totalPreviousDayInvoice();
  }

  totalPreviousDayInvoice(){
    this.totalPreviousDayInvoiceUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.totalPreviousDay = 0;
        if(res.objectResponse > 0){
          this.totalPreviousDay = res.objectResponse;
        }
      },
      (error) => {
        this.totalPreviousDay = 0;
      }
    )
  }

  readLastOpening(){
    this.readLastOpeningUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.opening = res.objectResponse.openingTotal;
      },
      (error) => {
      }
    )
  }
}
