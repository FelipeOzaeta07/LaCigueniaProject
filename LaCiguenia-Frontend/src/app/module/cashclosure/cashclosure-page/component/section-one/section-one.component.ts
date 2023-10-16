import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CashClosureInformationModel } from '@commons/domains/cashclosure/CashClosureInformationModel';
import { CashClosureModel } from '@commons/domains/cashclosure/CashClosureModel';
import { OpeningModel } from '@commons/domains/opening/OpeningModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DATE, TITLE, STORE, SYMBOL, STORE_NAME, CASH_CLOSURE, FIND_EXPENSE, SUB_TITLE, OPENING_BOX, TOTAL_SALES, TOTAL_EXPENSE, TOTAL_CASH, TOTAL_BOX, CLOSE_BOX, TOTAL_STATUS, MESSAGE_ERROR } 
from '@module/cashclosure/cashclosure-page/component/section-one/constans/section-one';
import { CreateCashClosureUseCase } from '@repository/cashclosure/case/CreateCashClosureUseCase';
import { InformationForCashClosuresUseCase } from '@repository/cashclosure/case/InformationForCashClosuresUseCase';
import { ReadLastCashClosureUseCase } from '@repository/cashclosure/case/ReadLastCashClosureUseCase';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit, OnChanges{

  @Input() modal!: boolean;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textDate = DATE;
  textStore = STORE;
  textStoreName = STORE_NAME;
  textNumberCashClosure = CASH_CLOSURE;
  textOpeningBox = OPENING_BOX;
  textTotalSales = TOTAL_SALES;
  textExpense = TOTAL_EXPENSE;
  textTotalCash = TOTAL_CASH;
  textTotalBox = TOTAL_BOX;
  textCloseBox = CLOSE_BOX;
  textSubTitle = SUB_TITLE;
  textFindExpense = FIND_EXPENSE;
  textSymbol = SYMBOL;
  textStatus = TOTAL_STATUS;

  informationCashClosure!: CashClosureInformationModel;
  cashClosure!: CashClosureModel;
  nextCashClosure!: string;
  openingBox!: OpeningModel;
  nextValue!: number
  errorMessage!: string;

  colombianPesos: number[] = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
  inputValues: number[] = new Array(this.colombianPesos.length).fill('');
  results: number[] = new Array(this.colombianPesos.length).fill(0);

  totalCashBox: number = 0;
  expense: number = 0;
  totalPhysicalCash: number = 0;
  date: string;


  constructor(private createCashClosureUseCase: CreateCashClosureUseCase, private readLastCashClosureUseCase: ReadLastCashClosureUseCase,
      private informationForCashClosuresUseCase : InformationForCashClosuresUseCase, private readLastOpeningUseCase: ReadLastOpeningUseCase,
      private router: Router ){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.date = year + '-' + month + '-' + day;
  }

  ngOnInit(): void {
    this.readLastCashClosure();
    this.informationForCashClosure();
    this.readLastOpening();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.modal == false){
      this.router.navigateByUrl('login-laciguenia/admin-page-principal');
    }
  }

  readLastOpening(){
    this.readLastOpeningUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.openingBox = res.objectResponse;
      },
      (error) =>{
      }
    )
  }

  informationForCashClosure(){
    this.informationForCashClosuresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.informationCashClosure = res.objectResponse;
        this.totalPhysicalCash = (this.informationCashClosure.cashClosureInformationTotalCash + this.informationCashClosure.cashClosureInformationOpeningBox) - this.expense;
      },
      (error) =>{
      }
    );
  }

  readLastCashClosure(){
    this.readLastCashClosureUseCase.execute().subscribe(
      (res :GenericResponse) => {
        if(res.statusCode == 200){
          this.nextValue = res.objectId + 1;
          this.nextCashClosure = this.nextValue.toString().padStart(4, '0');
        }
      },
      (error) =>{
        this.nextValue = 1;
        this.nextCashClosure = this.nextValue.toString().padStart(4, '0');
      }
    );
  }

  updateResult(index: number) {
    if (this.inputValues[index] >= 0 && this.inputValues[index] <= 9999) {
      this.results[index] = this.inputValues[index] * this.colombianPesos[index];
    }
    this.totalCashBox = this.results.reduce((total, result) => total + result, 0);
  }

  getColorClass() {
    const difference = this.totalCashBox - this.totalPhysicalCash;
  
    if(difference < 0) {
      return 'text_red';
    }else if (difference > 0) {
      return 'text_green';
    }else {
      return '';
    }
  }

  createCashClosure(){
    if(this.totalCashBox == 0){
      this.errorMessage = MESSAGE_ERROR;
    }else{
      this.cashClosure = {
        cashClosureId : 0,
        cashClosureDate: this.date,
        cashCloseStore: this.informationCashClosure.cashClosureInformationStore,
        cashClosureNumber: this.nextValue,
        cashClosureTotalClosure: this.informationCashClosure.cashClosureInformationTotalClosure + this.informationCashClosure.cashClosureInformationOpeningBox,
        cashClosureTotalOpeningBox: this.informationCashClosure.cashClosureInformationOpeningBox,
        cashClosureTotalMethodPay: this.informationCashClosure.cashClosureInformationTotalSalesMethodPay,
        cashClosureTotalExpense: this.expense,
        cashClosureTotalCashBox: this.totalCashBox,
        cashClosureDifference: this.totalCashBox - this.totalPhysicalCash,
        openingEntity: this.openingBox,
      }
  
      this.createCashClosureUseCase.execute(this.cashClosure).subscribe(
        (res: GenericResponse) => {
          this.modalEvent();
        },
        (error) => {
  
        }
      )
    }
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }
}
