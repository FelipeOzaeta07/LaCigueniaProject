import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { NAME_PRODUCT, TITLE, SALES_PRICE, AMOUNT, OPTION } from '@module/products/products-page/component/section-two/constans/section-two';
import { ReadInventoriesRecentlyCreateUseCase } from '@repository/inventory/case/ReadInventoriesRecentlyCreateUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})

export class SectionTwoComponent implements OnInit{

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() sendProduct = new EventEmitter<InventoryModel>();
  @Output() sendProductId = new EventEmitter<number>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textAmount = AMOUNT;
  textSalesPrices = SALES_PRICE;
  textOption = OPTION;

  inventoryModel!: InventoryModel [];

  constructor(private readInventoriesRecentlyCreateUseCase: ReadInventoriesRecentlyCreateUseCase){}

  modalEdit(index: number){
    this.sendProduct.emit(this.inventoryModel[index])
    this.modalActivateOne.emit(true);
  }

  modalDelete(index: number){
    this.sendProductId.emit(this.inventoryModel[index].productEntity.productId);
    this.modalActivateTwo.emit(true);
  }

  ngOnInit(): void {
    this.readProductsRecentlyCreate();
  }

  readProductsRecentlyCreate(){
    this.readInventoriesRecentlyCreateUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.inventoryModel = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }
}
