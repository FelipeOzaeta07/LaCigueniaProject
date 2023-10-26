import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodPaymentModel } from '@commons/domains/payment/MethodPaymentModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CreateMethodPaymentUseCase } from '@repository/payment/case/CreateMethodPaymentUseCase';
import { SUBTITLE_PAYMENT, TITLE_PAYMENT, NAME_PAYMENT, DESCRIPTION_PAYMENT, ACCEPT_PAYMENT } 
from '@module/setup/setup-page/component/section-four/constans/section-four';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent {

  @Output() eventPaymentAddComponent = new EventEmitter<boolean>;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE_PAYMENT;
  textSubTitle = SUBTITLE_PAYMENT;
  textName = NAME_PAYMENT;
  textDescription = DESCRIPTION_PAYMENT;
  textAccept = ACCEPT_PAYMENT;

  paymentForm!: FormGroup;
  methodPaymentModel!: MethodPaymentModel

  constructor(public formulary: FormBuilder, private createMethodPaymentUseCase: CreateMethodPaymentUseCase){
    this.paymentForm = formulary.group({
      nameMethodPayment: ['', [Validators.required]],
      descriptionMethodPayment: ['', [Validators.required]]
    });
  }

  createMethodPayment(){
    if (!this.paymentForm.valid) {
      this.paymentForm.markAllAsTouched();
      return
    }

    this.methodPaymentModel = {
      paymentMethodId: 0,  
      paymentMethodName: this.paymentForm.controls['nameMethodPayment'].value
    }

    this.createMethodPaymentUseCase.execute(this.methodPaymentModel).subscribe(
      (res: GenericResponse) => {
        this.modalEvent();
        this.eventMethodPaymentAdd();
      }
    );
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }

  eventMethodPaymentAdd(){
    this.eventPaymentAddComponent.emit(false);
  }
}