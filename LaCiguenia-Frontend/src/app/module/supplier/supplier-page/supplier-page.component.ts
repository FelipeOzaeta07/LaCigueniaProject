import { Component } from '@angular/core';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent {
  modalOne!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;
  supplierModel!: SupplierModel;
  supplierId!: number;

  modalActivate(datos: boolean){
    this.modalOne = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
  }
  SendSupplier(supplierModel : SupplierModel) {
    this.supplierModel = supplierModel;
  }

  SendSupplierId(index : number){
    this.supplierId = index;
  }
}