import { Component, EventEmitter, Output } from '@angular/core';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { NIT_SUPPLIER, TEXT_ONE, TEXT_TITLE, TEXT_TWO, TEXT_THREE, TITLE, NAME_SUPPLIER, CITY, OPTION, PHONE_NUMBER} 
from '@module/listsuppliers/listsuppliers-page/component/section-one/constans/section-one';
import { ReadSuppliersUseCase } from '@repository/supplier/case/ReadSuppliersUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendSupplierId = new EventEmitter<number>();
  @Output() sendSupplier = new EventEmitter<SupplierModel>();

  textNitSupplier = NIT_SUPPLIER;
  textSubTitle = TEXT_TITLE;
  textItemOne =TEXT_ONE;
  textItemTwo = TEXT_TWO;
  textItemThree = TEXT_THREE;
  textTitle = TITLE;
  textNameSupplier = NAME_SUPPLIER;
  textCity = CITY;
  textOption = OPTION;
  textPhoneNumber = PHONE_NUMBER;

  supplier!: SupplierModel;
  supplierModel: SupplierModel[] = [];

  message: boolean = true;

  constructor(private readSuppliersUseCase: ReadSuppliersUseCase){

  }

  ngOnInit(): void {
    this.readSuppliers();
  }

  readSuppliers(){
    this.readSuppliersUseCase.execute().subscribe(
      (res: GenericResponse) => {
        if(res.message != "Operación fallida"){
          this.message = false;
        }
        for(const resItem of res.objectResponse){
          this.supplierModel.push(resItem);
        }
      }
    )
  }
  
  modalEdit(index: number){
    this.sendSupplier.emit(this.supplierModel[index])
    this.modalActivateOne.emit(true);
  }

  modalDelete(index: number){
    this.sendSupplierId.emit(this.supplierModel[index].supplierId);
    this.modalActivateTwo.emit(true);
  }
}