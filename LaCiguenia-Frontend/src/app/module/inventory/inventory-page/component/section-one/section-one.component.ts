import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@commons/domains/model/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { AMOUNT, CODE, NAME_PRODUCT, OPTIONS, PAGING, SALES_PRICE, TITLE } from '@module/inventory/inventory-page/component/section-one/constans/section-one'
import { ProductsReadUseCase } from '@repository/product/case/ProductsReadUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{
  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textCode = CODE;
  textSalesPrice = SALES_PRICE;
  textAmount = AMOUNT;
  textOptions = OPTIONS;
  textPaging = PAGING;

  products!: ProductModel [];

  constructor(private productsReadUseCase: ProductsReadUseCase){

  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productsReadUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.products = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }

}
