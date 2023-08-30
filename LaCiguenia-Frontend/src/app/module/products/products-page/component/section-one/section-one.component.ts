import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AMOUNT, CATEGORY, DESCRIPTION, IVA, NAME_PRODUCT, PRICE, SAVE, TITLE } from '@module/products/products-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textPrice = PRICE;
  textIva = IVA;
  textAmount = AMOUNT;
  textCategory = CATEGORY;
  textDescription = DESCRIPTION;
  textPay = SAVE;

  productForm!: FormGroup;

  constructor(public formulary: FormBuilder, public router: Router){
    this.productForm = formulary.group({
      nameProduct: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
      amountProduct: ['', [Validators.required]],
      categoryProduct: ['', [Validators.required]],
      descriptionProduct: ['', [Validators.required]]
    });
  }



  createProduct(){

  }
}
