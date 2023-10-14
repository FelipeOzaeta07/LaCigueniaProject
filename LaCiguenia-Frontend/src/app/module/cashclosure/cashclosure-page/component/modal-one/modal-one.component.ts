import { Component, EventEmitter, Output } from '@angular/core';
import { TITLE, DONE } from '@module/cashclosure/cashclosure-page/component/modal-one/constans/modal-one';
import { OpeningAccessTokenService } from '@service/opening/implement/OpeningAccessTokenService';
import { SalesAccessTokenService } from '@service/sales/SalesAccessTokenService';
import { AccessTokenService } from '@service/user/implement/AccessTokenService';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textDone = DONE;

  constructor(private accessTokenService: AccessTokenService, private salesAccessTokenService: SalesAccessTokenService, 
    private openingAccessTokenService: OpeningAccessTokenService){}

  modalEvent() {
    this.salesAccessTokenService.salesAccessTokenRemove();
    this.openingAccessTokenService.openingAccessTokenRemove();
    this.modalActivate.emit(false);
  }

}