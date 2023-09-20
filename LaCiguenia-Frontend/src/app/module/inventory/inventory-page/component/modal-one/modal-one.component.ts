import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, DATE, NAME_PRODUCT, AMOUNT, FAIL, EDIT } from '@module/inventory/inventory-page/component/modal-one/constans/modal-one';
import { UpdateInventoryUseCase } from '@repository/inventory/case/UpdateInventoryUseCase';
import { UpdateProductUseCase } from '@repository/product/case/UpdateProductUseCase';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {
  
  @Input() inventoryModel!: InventoryModel;
  @Output() modalActivateOne = new EventEmitter<boolean>();

  textTitle = TITLE;
  textDate = DATE;
  textNameProduct = NAME_PRODUCT;
  textAmount = AMOUNT;
  textFail = FAIL;
  textEdit = EDIT;
  currentDate: string;

  inventoryForm!: FormGroup;

  constructor(public formulary: FormBuilder, private updateInventoryUseCase: UpdateInventoryUseCase){
    this.inventoryForm = formulary.group({
      nameProduct: ['', [Validators.required]],
      amountProduct: ['', [Validators.required]],
      currentDate: ['', [Validators.required]],

    }); 
    const today = new Date();
    this.currentDate = today.toISOString().slice(0, 10);
  }

  updateInventory(){

    this.inventoryModel = {
      inventoryId: this.inventoryModel.productEntity.productId,
      productEntity: this.inventoryModel.productEntity,
      inventoryAmount: this.inventoryForm.controls['amountProduct'].value != ''
        ? this.inventoryForm.controls['amountProduct'].value
        : this.inventoryModel.inventoryAmount,
      inventoryEntryDate: this.currentDate,  
    }

  
    this.updateInventoryUseCase.execute(this.inventoryModel).subscribe(
      (res: GenericResponse) => {
        if(res.statusCode == 200){
          this.modalEvent();
        }
      }
    )
  }

  modalEvent(){
    this.modalActivateOne.emit(false);
  }
}
