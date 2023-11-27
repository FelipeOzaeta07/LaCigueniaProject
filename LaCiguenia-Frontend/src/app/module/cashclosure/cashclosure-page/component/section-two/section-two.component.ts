import { Component, OnInit } from '@angular/core';
import { CashClosureInformationModel } from '@commons/domains/cashclosure/CashClosureInformationModel';
import { MethodPaymentSales } from '@commons/domains/payment/MethodPaymentSales';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, FORMAT_METHOD_PAY, TOTAL_CLOSURE, TOTAL_EXPENSE, TOTAL_SALES, TOTAL_OPENING_BOX,
   CONCEPT, TOTAL_CASH_CLOSURE, DESCRIPTION, SYMBOL, EXPENSE, METHOD_PAY, TOTAL, VALUE, AMOUNT } 
from '@module/cashclosure/cashclosure-page/component/section-two/constans/section-two';
import { DetailMethodPaymentForCashClosuresUseCase } from '@repository/cashclosure/case/DetailMethodPaymentForCashClosuresUseCase';
import { InformationForCashClosuresUseCase } from '@repository/cashclosure/case/InformationForCashClosuresUseCase';
import { ReadExpensesForOpeningUseCase } from '@repository/expense/case/ReadExpensesForOpeningUseCase';

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
  methodPaymentSales: MethodPaymentSales [] = [];
  totalSales: number = 0;
  totalExpense : number = 0;

  constructor(private informationForCashClosuresUseCase: InformationForCashClosuresUseCase, 
    private detailMethodPaymentForCashClosuresUseCase: DetailMethodPaymentForCashClosuresUseCase,
    private readExpensesForOpeningUseCase: ReadExpensesForOpeningUseCase){}

  ngOnInit(): void {
    this.informationForCashClosures();
    this.detailMethodPaymentForCashClosures();
    this.readExpensesForOpening();
  }

  informationForCashClosures(){
    this.informationForCashClosuresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.informationCashClosure = res.objectResponse;
      }
    )
  }

  detailMethodPaymentForCashClosures(){
    this.detailMethodPaymentForCashClosuresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.methodPaymentSales.push(item)
          this.totalSales += item.totalSales;
        }
      }
    );
  }

  readExpensesForOpening(){
    this.readExpensesForOpeningUseCase.execute(this.informationCashClosure.cashClosureInformationStoreId).subscribe(
      (res: GenericResponse) => {
        this.totalExpense = res.objectResponse;
      }
    );
  }
}