import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '@commons/domains/model/category/CategoryModel';
import { InventoryModel } from '@commons/domains/model/inventory/InventoryModel';
import { ProductModel } from '@commons/domains/model/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { AMOUNT, CATEGORY, DESCRIPTION, CODE, NAME_PRODUCT, SAVE, TITLE, IVA, PRICE_SALE, PRICE_COST } from '@module/products/products-page/component/section-one/constans/section-one';
import { CategoriesReadUseCase } from '@repository/category/case/CategoriesReadUseCase';
import { InventoryCreateUseCase } from '@repository/inventory/case/InventoryCreateUseCase';
import { ProductCreateUseCase } from '@repository/product/case/ProductCreateUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPriceSale = PRICE_SALE;
  textPriceCost = PRICE_COST;
  textCode = CODE;
  textAmount = AMOUNT;
  textIva = IVA;
  textCategory = CATEGORY;
  textDescription = DESCRIPTION;
  textPay = SAVE;

  productForm!: FormGroup;
  productModel!: ProductModel;
  inventoryModel!: InventoryModel;
  category!: CategoryModel [];

  currentDate: string;


  constructor(public formulary: FormBuilder, public router: Router, private productCreateUseCase: ProductCreateUseCase,
              private categoriesReadUseCase: CategoriesReadUseCase, private inventoryCreateUseCase: InventoryCreateUseCase){
    this.productForm = formulary.group({
      nameProduct: ['', [Validators.required]],
      codeProduct: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
      categoryProduct: ['', [Validators.required]],
      descriptionProduct: ['', [Validators.required]],
      amountProduct: ['', [Validators.required]]
    });
    const today = new Date();
    this.currentDate = today.toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.getCategory();
  }
  
  getCategory(){
    this.categoriesReadUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.category = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }

  createProduct(){
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.productModel = {
      productId: this.productForm.controls['codeProduct'].value,
      productName: this.productForm.controls['nameProduct'].value,
      productPrice: this.productForm.controls['priceProduct'].value,
      productDescription: this.productForm.controls['descriptionProduct'].value,
      categoryEntity: this.productForm.controls['categoryProduct'].value
    }

    this.productCreateUseCase.execute(this.productModel).subscribe(
      (genericResponse: GenericResponse) => {
        if (genericResponse.statusCode === 200) {
          this.modalEvent();
          this.productForm.reset();
        } else {
          alert("Producto Ya Existe");
          this.productForm.reset();
        }
      },
      (error) => {
        console.error('Error en la suscripción:', error);
        alert("Ocurrió un error al procesar la solicitud");
        this.productForm.reset();
    });

    this.createInventory(this.productModel);
  }

  createInventory(productModel: ProductModel){
    this.inventoryModel = {
      inventoryId: 0,
      inventoryAmount: this.productForm.controls['amountProduct'].value,
      inventoryEntryDate: this.currentDate,
      productEntity: productModel
    }

    this.inventoryCreateUseCase.execute(this.inventoryModel).subscribe(
      (res: GenericResponse) => {
        console.log("Respuesta del Inventario: " + res.message)
      }
    )

  }

  modalEvent() {
    this.modalActivateTwo.emit(true);
  }
}
