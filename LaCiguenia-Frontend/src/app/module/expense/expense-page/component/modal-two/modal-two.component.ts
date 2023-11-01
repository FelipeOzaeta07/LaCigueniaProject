import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseModel } from '@commons/domains/expense/ExpenseModel';
import { OpeningModel } from '@commons/domains/opening/OpeningModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NUMBER_INVOICE, PAY, VALUE, PLACE, DESCRIPTON, DONE, FAIL } 
from '@module/expense/expense-page/component/modal-two/constans/modal-two';
import { ReadLastExpenseUseCase } from '@repository/expense/case/ReadLastExpenseUseCase';
import { UpdateExpenseUseCase } from '@repository/expense/case/UpdateExpenseUseCase';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {
  
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() expenseModel!: ExpenseModel;

  textTitle = TITLE;
  textNumberInvoice = NUMBER_INVOICE;
  textPay = PAY;
  textValue = VALUE;
  textPlace = PLACE; 
  textDescription = DESCRIPTON;
  textDone = DONE;
  textFail = FAIL;


  selectedPaymentMethod: string = '';
  expenseForm!: FormGroup;
  openingModel!: OpeningModel;


  metodosDePago = ['Efectivo', 'Tarjeta de Crédito', 'Tarjeta de Débito'];


  constructor(private readLastExpenseUseCase: ReadLastExpenseUseCase, public formulary: FormBuilder,
    private updateExpenseUseCase: UpdateExpenseUseCase, private readLastOpeningUseCase: ReadLastOpeningUseCase){
      this.expenseForm = formulary.group({
      noExpense: ['', [Validators.required]],
      methodPayExpense: ['', [Validators.required]],
      valueExpense: ['', [Validators.required]],
      placeExpense: ['', [Validators.required]],
      descriptionExpense: ['', [Validators.required]],
      categoryExpense: ['', [Validators.required]],
      productExpense: ['', [Validators.required]],
    });
  }

  updateExpense() {
    this.expenseModel = {
      expenseId: this.expenseModel.expenseId,
      expenseDate: 'null',
      expenseNumberInvoice: this.expenseForm.get('noExpense')?.value || this.expenseModel.expenseNumberInvoice,
      paymentMethodEntity: this.expenseForm.get('methodPayExpense')?.value || this.expenseModel.paymentMethodEntity,
      expenseValue: this.expenseForm.get('valueExpense')?.value || this.expenseModel.expenseValue,
      expenseSupplierLocation: this.expenseForm.get('placeExpense')?.value || this.expenseModel.expenseSupplierLocation,
      expenseAmount: this.expenseForm.get('amountExpense')?.value || this.expenseModel.expenseSupplierLocation,
      expenseStatus: 'Habilitado',
      expenseDescription: this.expenseForm.get('descriptionExpense')?.value || this.expenseModel.expenseDescription,
      productEntity: this.expenseForm.get('productExpense')?.value || this.expenseModel.productEntity,
      categoryEntity: this.expenseForm.get('categoryExpense')?.value || this.expenseModel.categoryEntity,
      openingEntity: this.openingModel,
    };
    this.updateExpenseUseCase.execute(this.expenseModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.modalEventTwo();
          if(res.statusCode == 200){
            window.location.reload();
          }
        } else {
          alert("El Gasto NO Existe");
          this.expenseForm.reset();
        }
      }
    );
  }

  readLastOpening(){
    this.readLastOpeningUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.openingModel = res.objectResponse;
      }
    );
  }

  modalEventTwo() {
    this.modalActivateTwo.emit(false);
  }
}