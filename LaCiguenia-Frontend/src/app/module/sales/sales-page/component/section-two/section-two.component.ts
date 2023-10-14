import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CASH_CLOSURE } from '@module/sales/sales-page/component/section-two/constans/section-two';
import { SalesAccessTokenService } from '@service/sales/SalesAccessTokenService';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  textCashClosure = CASH_CLOSURE;
  @Output() sendMessageOpeningBox = new EventEmitter<boolean>();

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