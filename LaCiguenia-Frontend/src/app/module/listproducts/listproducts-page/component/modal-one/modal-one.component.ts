import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { UpdateInventoryUseCase } from '@repository/inventory/case/UpdateInventoryUseCase';
import { UpdateProductUseCase } from '@repository/product/case/UpdateProductUseCase';
import { AMOUNT, CATEGORY, CODE, COST, DESCRIPTION, DONE, FAIL, IVA, NAME_PRODUCT, PRICE, SYMBOL_PAY, SYMBOL_PERCENTAGE, TITLE } from './constans/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {
  
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() inventoryModel!: InventoryModel;

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPrice = PRICE;
  textCost = COST;
  textIva = IVA;
  textDescription = DESCRIPTION;
  textCode = CODE;
  textAmount = AMOUNT;
  textFail = FAIL;
  textDone = DONE;
  textCategory = CATEGORY;
  textSymbol = SYMBOL_PAY;
  textPercentage = SYMBOL_PERCENTAGE;

  category!: CategoryModel [];
  productForm!: FormGroup;
  productModel!: ProductModel;
  inventory!: InventoryModel;
  currentDate: string;


  constructor(private readCategoriesUseCase: ReadCategoriesUseCase, public formulary: FormBuilder,
              private updateProductUseCase: UpdateProductUseCase, private updateInventoryUseCase: UpdateInventoryUseCase){
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      this.currentDate = year + '-' + month + '-' + day;

      this.productForm = formulary.group({
      nameProduct: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
      costProduct: ['', [Validators.required]],
      ivaProduct: ['', [Validators.required]],
      amountProduct: ['', [Validators.required]],
      categoryProduct: ['', [Validators.required]],
      descriptionProduct: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCategory();
  }
  
  getCategory(){
    this.readCategoriesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.category = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }

  modalEvent() {
    this.modalActivateOne.emit(false);
  }

  updateProducts(){

    this.productModel = {
      productId: this.inventoryModel.productEntity.productId,
      productName: this.productForm.controls['nameProduct'].value != ''
        ? this.productForm.controls['nameProduct'].value
        : this.inventoryModel.productEntity.productName,
      productPrice: this.productForm.controls['priceProduct'].value != ''
        ? this.productForm.controls['priceProduct'].value
        : this.inventoryModel.productEntity.productPrice,
      productIva: this.productForm.controls['ivaProduct'].value != ''
        ? this.productForm.controls['ivaProduct'].value
        : this.inventoryModel.productEntity.productIva,
      productCost: this.productForm.controls['costProduct'].value != ''
        ? this.productForm.controls['costProduct'].value
        : this.inventoryModel.productEntity.productCost,
      productDescription: this.productForm.controls['descriptionProduct'].value != ''
        ? this.productForm.controls['descriptionProduct'].value
        : this.inventoryModel.productEntity.productDescription,
      productStatus: "Habilitado",
      categoryEntity: this.productForm.controls['categoryProduct'].value != ''
        ? this.productForm.controls['categoryProduct'].value
        : this.category[0]
    }

    this.updateProductUseCase.execute(this.productModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.updateInventory(this.productModel);
          this.modalEvent();
          if(res.statusCode == 200){
            window.location.reload();
          }
        } else {
          alert("Producto NO Existe");
          this.productForm.reset();
        }
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
        this.productForm.reset();
    });
  }

  updateInventory(productModel: ProductModel){
    this.inventory = {
      inventoryId: this.inventoryModel.inventoryId,
      inventoryAmount: this.productForm.controls['amountProduct'].value != ''
        ? this.productForm.controls['amountProduct'].value
        : this.inventoryModel.inventoryAmount,
      inventoryEntryDate: this.currentDate,
      productEntity: productModel
    }

    this.updateInventoryUseCase.execute(this.inventory).subscribe(
      (res: GenericResponse) => {
        console.log("Respuesta del Inventario: " + res.message)
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
    });
  }
}
