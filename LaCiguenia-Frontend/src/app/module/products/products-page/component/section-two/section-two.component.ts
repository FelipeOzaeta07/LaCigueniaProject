import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { NAME_PRODUCT, TITLE, SALES_PRICE, AMOUNT, OPTION } from '@module/products/products-page/component/section-two/constans/section-two';
import { ReadProductsRecentlyCreateUseCase } from '@repository/product/case/ReadProductsRecentlyCreateUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})

export class SectionTwoComponent implements OnInit{

  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textAmount = AMOUNT;
  textSalesPrices = SALES_PRICE;
  textOption = OPTION;

  products!: ProductModel [];

  modalEvent(){
    const datos = true;
    this.modalActivate.emit(datos);
  }

  constructor(private readProductsRecentlyCreateUseCase: ReadProductsRecentlyCreateUseCase){}

  ngOnInit(): void {
    this.readProductsRecentlyCreate();
  }

  readProductsRecentlyCreate(){
    this.readProductsRecentlyCreateUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.products = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }
}
