import { Component } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';

@Component({
  selector: 'app-listsuppliers-page',
  templateUrl: './listsuppliers-page.component.html',
  styleUrls: ['./listsuppliers-page.component.scss']
})
export class ListsuppliersPageComponent {
  
  modalOne!: boolean;
  modalTwo!: boolean;
  supplierId!: number;
  supplierModel!: SupplierModel;

  sendSupplier(supplierModel: SupplierModel){
    this.supplierModel = supplierModel;
  }

  sendSupplierId(supplierId: number){
    this.supplierId = supplierId;
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