import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { AMOUNT, CATEGORY, DESCRIPTION, CODE, NAME_PRODUCT, SAVE, TITLE, IVA, PRICE_SALE, PRICE_COST } from '@module/products/products-page/component/section-one/constans/section-one';
import { CategoriesReadUseCase } from '@repository/category/case/CategoriesReadUseCase';
import { InventoryCreateUseCase } from '@repository/inventory/case/InventoryCreateUseCase';
import { CreateProductsUseCase } from '@repository/product/case/CreateProductsUseCase';

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


  constructor(public formulary: FormBuilder, public router: Router, private CreateProductsUseCase: CreateProductsUseCase,
              private categoriesReadUseCase: CategoriesReadUseCase, private inventoryCreateUseCase: InventoryCreateUseCase){
    this.productForm = formulary.group({
      nameProduct: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
      costProduct: ['', [Validators.required]],
      ivaProduct: ['', [Validators.required]],
      amountProduct: ['', [Validators.required]],
      categoryProduct: ['', [Validators.required]],
      descriptionProduct: ['', [Validators.required]],
    });
    const TODAY = new Date();
    this.currentDate = TODAY.toISOString().slice(0, 10);
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

  CreateProducts(){
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return
    }

    this.productModel = {
      productId: 0,
      productName: this.productForm.controls['nameProduct'].value,
      productPrice: this.productForm.controls['priceProduct'].value,
      productIva: this.productForm.controls['ivaProduct'].value,
      productCost: this.productForm.controls['costProduct'].value,
      productDescription: this.productForm.controls['descriptionProduct'].value,
      productStatus: "Habilitado",
      categoryEntity: this.productForm.controls['categoryProduct'].value
    }

    this.CreateProductsUseCase.execute(this.productModel).subscribe(
      (genericResponse: GenericResponse) => {
        if (genericResponse.statusCode == 200) {
          this.createInventory(this.productModel);
          this.modalEvent();
          this.productForm.reset();
        } else {
          alert("Producto Ya Existe");
          this.productForm.reset();
        }
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
        this.productForm.reset();
    });
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
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
    });
  }

  modalEvent() {
    this.modalActivateTwo.emit(true);
  }
}
