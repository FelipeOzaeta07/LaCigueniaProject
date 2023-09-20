import { Component } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  inventoryId!: number;
  inventoryModel!: InventoryModel;

  sendInventory(inventoryModel: InventoryModel){
    this.inventoryModel = inventoryModel;
  }

  sendInventoryId(inventoryId: number){
    this.inventoryId = inventoryId;
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
