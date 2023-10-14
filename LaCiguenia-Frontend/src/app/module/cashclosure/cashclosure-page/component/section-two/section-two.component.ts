import { Component, OnInit } from '@angular/core';
import { CashClosureInformationModel } from '@commons/domains/cashclosure/CashClosureInformationModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, FORMAT_METHOD_PAY, TOTAL_CLOSURE, TOTAL_EXPENSE, TOTAL_SALES, TOTAL_OPENING_BOX,
   CONCEPT, TOTAL_CASH_CLOSURE, DESCRIPTION, SYMBOL, EXPENSE, METHOD_PAY, TOTAL, VALUE, AMOUNT } 
from '@module/cashclosure/cashclosure-page/component/section-two/constans/section-two';
import { InformationForCashClosuresUseCase } from '@repository/cashclosure/case/InformationForCashClosuresUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit{

  textTitle = TITLE;
  textFormatMethodPay = FORMAT_METHOD_PAY;
  textAmount = AMOUNT;
  textMethodPay = METHOD_PAY;
  textValue = VALUE;
  textTotal = TOTAL;
  textExpense = EXPENSE;
  textDescription = DESCRIPTION;
  textTotalCashClosure = TOTAL_CASH_CLOSURE;
  textConcept = CONCEPT;
  textTotalOpeningBox = TOTAL_OPENING_BOX;
  textTotalSales = TOTAL_SALES;
  textTotalExpense = TOTAL_EXPENSE;
  textTotalClosure = TOTAL_CLOSURE;
  textSymbol = SYMBOL;

  informationCashClosure!: CashClosureInformationModel;

  constructor(private informationForCashClosuresUseCase: InformationForCashClosuresUseCase){}

  ngOnInit(): void {
    this.informationForCashClosures();
  }

  informationForCashClosures(){
    this.informationForCashClosuresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.informationCashClosure = res.objectResponse;
      }
    )
  }
}