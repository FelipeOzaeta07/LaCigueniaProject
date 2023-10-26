import { Component, EventEmitter, Output } from '@angular/core';
import { CATEGORY_ADD, CATEGORY_BUTTON, CATEGORY_MESSAGE, PAYMENT_ADD, PAYMENT_BUTTON, PAYMENT_MESSAGE, STORE_ADD, STORE_BUTTON, STORE_MESSAGE } 
from '@module/setup/setup-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  @Output() eventStoreAddComponent = new EventEmitter<boolean>;
  @Output() eventPaymentAddComponent = new EventEmitter<boolean>;
  @Output() eventCategoryAddComponent = new EventEmitter<boolean>;

  textStoreAdd = STORE_ADD;
  textStoreMessage = STORE_MESSAGE;
  textStoreButton = STORE_BUTTON;
  textPaymentAdd = PAYMENT_ADD;
  textPaymentMessage = PAYMENT_MESSAGE;
  textPaymentButton = PAYMENT_BUTTON;
  textCategoryAdd = CATEGORY_ADD;
  textCategoryMessage = CATEGORY_MESSAGE;
  textCategoryButton = CATEGORY_BUTTON;

  eventStoreAdd(){
    this.eventStoreAddComponent.emit(true);
  }
  
  eventMethodPaymentAdd(){
    this.eventPaymentAddComponent.emit(true);
  }

  eventCategoryAdd(){
    this.eventCategoryAddComponent.emit(true);
  }
}