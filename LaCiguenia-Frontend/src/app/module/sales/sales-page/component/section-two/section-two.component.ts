import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CASH_CLOSURE, CASH_EXPENSE, CASH_HISTORY_CLOSURE } from '@module/sales/sales-page/component/section-two/constans/section-two';
import { SalesAccessTokenService } from '@service/sales/SalesAccessTokenService';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  @Output() sendMessageOpeningBox = new EventEmitter<boolean>();

  textCashClosure = CASH_CLOSURE;
  textFindExpense = CASH_EXPENSE;
  textHistoryClosure = CASH_HISTORY_CLOSURE;

  constructor(private salesAccessTokenService: SalesAccessTokenService, private router: Router){}

  navigateBy(){
    const MESSAGE = this.salesAccessTokenService.salesAccessTokenGet();
    if(MESSAGE == 'Operación exitosa'){
      this.router.navigateByUrl('login-laciguenia/sales-page-principal/cash-closure-page-principal');
    }else{
      this.sendMessageOpeningBox.emit(true);
    }
  }
}