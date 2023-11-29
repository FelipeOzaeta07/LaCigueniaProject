import { Component } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';

@Component({
  selector: 'app-listproducts-page',
  templateUrl: './listproducts-page.component.html',
  styleUrls: ['./listproducts-page.component.scss']
})
export class ListproductsPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  productId!: number;
  inventoryModel!: InventoryModel;

  sendProduct(inventoryModel: InventoryModel){
    this.inventoryModel = inventoryModel;
  }

  sendProductId(productId: number){
    this.productId = productId;
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
    if(datos === false){
      window.location.reload();
    }
  }
}