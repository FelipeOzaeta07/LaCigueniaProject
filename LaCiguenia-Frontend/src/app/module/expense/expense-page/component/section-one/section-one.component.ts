import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { ExpenseModel } from '@commons/domains/expense/ExpenseModel';
import { OpeningModel } from '@commons/domains/opening/OpeningModel';
import { MethodPaymentModel } from '@commons/domains/payment/MethodPaymentModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { METHOD_PAY, TITLE, INVOICE, PLACE, VALUE, DESCRIPTION, SAVE } 
from '@module/expense/expense-page/component/section-one/constans/section-one';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { CreateExpenseUseCase } from '@repository/expense/case/CreateExpenseUseCase';
import { ReadLastExpenseUseCase } from '@repository/expense/case/ReadLastExpenseUseCase';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';
import { ReadMethodsPaymentUseCase } from '@repository/payment/case/ReadMethodsPaymentUseCase';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textInvoice = INVOICE;
  textPlace = PLACE;
  textMethodPay = METHOD_PAY;
  textValue = VALUE;
  textDescription = DESCRIPTION;
  textSave = SAVE;

  selectedPaymentMethod: string = '';
  expenseForm!: FormGroup;
  expenseModel!: ExpenseModel;
  methodPayment: MethodPaymentModel [] = [];
  currentDate!: string;
  openingModel!: OpeningModel;
  productArray: ProductModel [] = [];
  categoryArray: CategoryModel [] = [];

  constructor(public formulary: FormBuilder, public router: Router, private createExpenseUseCase: CreateExpenseUseCase, 
    private readMethodsPaymentUseCase: ReadMethodsPaymentUseCase, private readProductsUseCase: ReadProductsUseCase, 
    private readCategoriesUseCase: ReadCategoriesUseCase, private readLastOpeningUseCase: ReadLastOpeningUseCase){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;
    
    this.expenseForm = formulary.group({
      numberExpense: ['', [Validators.required]],
      placeExpense: ['', [Validators.required]],
      methodPayExpense: ['', [Validators.required]],
      valueExpense: ['', [Validators.required]],
      amountExpense: [''],
      descriptionExpense: ['', [Validators.required]],
      productExpense: [''],
      categoryExpense: [''],
    });
  }

  ngOnInit(): void {
    this.readMethodsPayment();
    this.readCategories();
    this.readProducts();
    this.readLastOpening();
  }

  readCategories(){
    this.readCategoriesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.categoryArray.push(item);
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

  readProducts(){
    this.readProductsUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.productArray.push(item);
        }
      }
    );
  }

  readMethodsPayment(){
    this.readMethodsPaymentUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.methodPayment.push(item);
        }
      }
    )
  }

  createExpense(){
    if (!this.expenseForm.valid) {
      return this.expenseForm.markAllAsTouched();
    }

    this.expenseModel = {
      expenseId: 0,
      expenseDate: this.currentDate,
      expenseNumberInvoice: this.expenseForm.controls['numberExpense'].value,
      expenseSupplierLocation: this.expenseForm.controls['placeExpense'].value,
      expenseValue: this.expenseForm.controls['valueExpense'].value,
      expenseDescription: this.expenseForm.controls['descriptionExpense'].value,
      expenseAmount: this.expenseForm.controls['amountExpense'].value,
      expenseStatus: 'Habilitado',
      paymentMethodEntity: this.expenseForm.controls['methodPayExpense'].value,
      productEntity: this.expenseForm.controls['productExpense'].value,
      categoryEntity: this.expenseForm.controls['categoryExpense'].value,
      openingEntity: this.openingModel,
    }

    this.createExpenseUseCase.execute(this.expenseModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.expenseModel.expenseId = res.objectId;

          this.expenseForm.reset();
          this.modalEvent();
        } else {
          alert("El Gasto Ya Existe");
          this.expenseForm.reset();

        }
      },(error: GenericResponse) => {
        this.expenseForm.reset();
    });
  } 
  modalEvent() {
    this.modalActivate.emit(true);
  }


}