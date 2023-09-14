import { Component } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { InventoryModule } from '@module/inventory/inventory.module';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;
  inventoryModel!: InventoryModel;
  productId!: number;

  sendProduct(inventoryModel: InventoryModel){
    this.inventoryModel = inventoryModel;
  }

  sendProductId(productId: number){
    this.productId = productId;
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean){
    this.modalThree = datos;
  }
}
