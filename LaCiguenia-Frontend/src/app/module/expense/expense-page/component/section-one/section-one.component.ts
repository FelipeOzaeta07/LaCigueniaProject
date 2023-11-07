import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { ExpenseModel } from '@commons/domains/expense/ExpenseModel';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { OpeningModel } from '@commons/domains/opening/OpeningModel';
import { MethodPaymentModel } from '@commons/domains/payment/MethodPaymentModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { METHOD_PAY, TITLE, INVOICE, PLACE, VALUE, DESCRIPTION, SAVE, DATE_PAY, SUB_TITLE, CATEGORY, MESSAGE } 
from '@module/expense/expense-page/component/section-one/constans/section-one';
import { InventoryModule } from '@module/inventory/inventory.module';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { UpdateCategoryUseCase } from '@repository/category/case/UpdateCategoryUseCase';
import { CreateExpenseUseCase } from '@repository/expense/case/CreateExpenseUseCase';
import { UpdateInventoryUseCase } from '@repository/inventory/case/UpdateInventoryUseCase';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';
import { ReadMethodsPaymentUseCase } from '@repository/payment/case/ReadMethodsPaymentUseCase';
import { ReadProductForNameUseCase } from '@repository/product/case/ReadProductForNameUseCase';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';
import { UpdateProductUseCase } from '@repository/product/case/UpdateProductUseCase';

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
  textDate = DATE_PAY;
  textSubTitle = SUB_TITLE;
  textCategory = CATEGORY;
  textMessage = MESSAGE;

  selectedPaymentMethod: string = '';
  expenseForm!: FormGroup;
  expenseModel!: ExpenseModel;
  message: boolean = false;
  methodPayment: MethodPaymentModel [] = [];
  currentDate!: string;
  openingModel!: OpeningModel;
  inventoryModel!: InventoryModel [];

  constructor(public formulary: FormBuilder, public router: Router, private createExpenseUseCase: CreateExpenseUseCase, 
    private readMethodsPaymentUseCase: ReadMethodsPaymentUseCase, private readProductsUseCase: ReadProductsUseCase, 
    private readLastOpeningUseCase: ReadLastOpeningUseCase, private updateInventoryUseCase: UpdateInventoryUseCase, 
    private readProductForNameUseCase: ReadProductForNameUseCase, private updateProductUseCase: UpdateProductUseCase){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;
    
    this.expenseForm = formulary.group({
      numberExpense: ['', [Validators.required]],
      datePayExpense: ['', [Validators.required]],
      placeExpense: ['', [Validators.required]],
      methodPayExpense: ['', [Validators.required]],
      valueExpense: ['', [Validators.required]],
      descriptionExpense: ['', [Validators.required]],
      productExpense: [''],
      amountExpense: [''],
      totalValueExpense: [''],
    });
  }

  ngOnInit(): void {
    this.readMethodsPayment();
    this.readLastOpening();
  }


  readLastOpening(){
    this.readLastOpeningUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.openingModel = res.objectResponse;
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
      expenseStatus: 'Pagado',
      paymentMethodEntity: this.expenseForm.controls['methodPayExpense'].value,
      openingEntity: this.openingModel,
    }
    if(this.inventoryModel != undefined){
      console.log("Entramos al if")
      for(let item of this.inventoryModel){
        this.updateInventoryUseCase.execute(item).subscribe(
          (res: GenericResponse) => {
            if(res.statusCode == 200){
              console.log("inventario Actualizado")
            }
          }
        );
        this.updateProductUseCase.execute(item.productEntity).subscribe(
          (res: GenericResponse) => {
            if(res.statusCode == 200){
              console.log("inventario Actualizado")
            }
          }
        );
      }
    }

    this.createExpenseUseCase.execute(this.expenseModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.expenseModel.expenseId = res.objectId;
          this.expenseForm.reset();
          this.modalEvent();
        }
      });
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }

  addProduct(){
    if (!this.expenseForm.valid) {
      return this.expenseForm.markAllAsTouched();
    }
    else if (this.inventoryModel == null) {
      this.readProductForNameUseCase.execute(this.expenseForm.controls['productExpense'].value).subscribe(
        (res: GenericResponse) => {
          this.addProductOnetoOne(res);
        }
      );
    }else{
      this.readProductForNameUseCase.execute(this.expenseForm.controls['productExpense'].value).subscribe(
        (res: GenericResponse) => {
          this.addProductOnetoOne(res);
        }
      );
    }
  }

  addProductOnetoOne(res: GenericResponse){
    if(res.objectResponse == "Producto no existe"){
      this.message = true;
    }else{
      this.message = false;
      this.inventoryModel = [];
      let product: ProductModel = {
        productId: res.objectResponse.productId,
        productName: res.objectResponse.productName,
        productPrice: res.objectResponse.productPrice,
        productIva: res.objectResponse.productIva,
        productCost: 
          this.expenseForm.controls['totalValueExpense'].value / this.expenseForm.controls['amountExpense'].value,
        productDescription: res.objectResponse.productDescription,
        productStatus: res.objectResponse.productStatus,
        categoryEntity: res.objectResponse.categoryEntity,
      }

      let inventory: InventoryModel = {
        inventoryId: res.objectResponse.productId,
        //Error Corregir la suma del inventario mas la que existia
        inventoryAmount: this.expenseForm.controls['amountExpense'].value,
        inventoryEntryDate: this.currentDate,
        productEntity: product,
      };

      this.inventoryModel.push(inventory);
    }
  }

  deleteProduct(index: number){
    console.log("Prueba Datos: " + this.inventoryModel[index].productEntity.productName)
  }
}