import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { AMOUNT, CODE, NAME_PRODUCT, OPTIONS, PAGING, SALES_PRICE, TITLE } from '@module/inventory/inventory-page/component/section-one/constans/section-one'
import { ReadInventoriesUseCase } from '@repository/inventory/case/ReadInventoriesUseCase';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendInventoryId = new EventEmitter<number>();
  @Output() sendInventory = new EventEmitter<InventoryModel>();

  textTitle = TITLE;
  textNameProduct = NAME_PRODUCT;
  textCode = CODE;
  textSalesPrice = SALES_PRICE;
  textAmount = AMOUNT;
  textOptions = OPTIONS;
  textPaging = PAGING;

  products!: ProductModel [];
  inventory!: InventoryModel;
  inventoryModel: InventoryModel[] = [];


  constructor(private readProductsUseCase: ReadProductsUseCase, private readInventoriesUseCase: ReadInventoriesUseCase){

  }

  ngOnInit(): void {
    this.getProducts();
    this.getInventoryProduct();
  }

  getInventoryProduct(){
    this.readInventoriesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        console.log("Prueba Valores Inventario: " + res.objectResponse);
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
    this.sendInventory.emit(this.inventoryModel[index]);
    this.modalActivateOne.emit(true);
  }

  modalDelete(index: number){
    this.sendInventoryId.emit(this.inventoryModel[index].inventoryId);
    this.modalActivateTwo.emit(true);
  }
}
