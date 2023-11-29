import { Component, EventEmitter, Output } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NAME_PRODUCT, CODE, SALES_PRICE, AMOUNT, OPTIONS, OPTION, PAGING, TEXT_TITLE, TEXT_ONE, TEXT_TWO, TEXT_THREE } from './constans/section-one';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';
import { ReadInventoriesUseCase } from '@repository/inventory/case/ReadInventoriesUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendInventoryId = new EventEmitter<number>();
  @Output() sendInventory = new EventEmitter<InventoryModel>();

  @Output() sendProduct = new EventEmitter<InventoryModel>();
  @Output() sendProductId = new EventEmitter<number>();


  textCode = CODE;
  textSalesPrice = SALES_PRICE;
  textOptions = OPTIONS;
  textPaging = PAGING;
  textSubTitle = TEXT_TITLE;
  textItemOne =TEXT_ONE;
  textItemTwo = TEXT_TWO;
  textItemThree = TEXT_THREE;
  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textAmount = AMOUNT;
  textSalesPrices = SALES_PRICE;
  textOption = OPTION;

  products!: ProductModel [];
  inventory!: InventoryModel;
  inventoryModel: InventoryModel[] = [];

  message: boolean = true;

  constructor(private readProductsUseCase: ReadProductsUseCase, 
    private readInventoriesUseCase: ReadInventoriesUseCase){

  }

  ngOnInit(): void {
    this.getProducts();
    this.getInventoryProduct();
  }

  getInventoryProduct(){
    this.readInventoriesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        if(res.message != "Operación fallida"){
          this.message = false;
        }
        for(const resItem of res.objectResponse){
          this.inventory = resItem;
          this.inventoryModel.push(this.inventory);
        }
      }
    )
  }
  
  getProducts(){
    this.readProductsUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.products = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }

  modalEdit(index: number){
    this.sendProduct.emit(this.inventoryModel[index])
    this.modalActivateOne.emit(true);
  }

  modalDelete(index: number){
    this.sendProductId.emit(this.inventoryModel[index].productEntity.productId);
    this.modalActivateTwo.emit(true);
  }
}
