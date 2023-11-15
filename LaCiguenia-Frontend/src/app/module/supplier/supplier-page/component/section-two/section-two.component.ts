import { Component, EventEmitter, Output } from '@angular/core';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NAME_SUPPLIER, NIT_RUT, CITY, NUMBER_PHONE, OPTIONS } 
from '@module/supplier/supplier-page/component/section-two/constans/section-two';
import { ReadLastSupplierUseCase } from '@repository/supplier/case/ReadLastSupplierUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() modalActivateThree = new EventEmitter<boolean>();
  @Output() SendSupplier = new EventEmitter<SupplierModel>();
  @Output() SendSupplierId = new EventEmitter<number>();

  textTitle = TITLE;
  textNameSupplier = NAME_SUPPLIER;
  textNit = NIT_RUT;
  textCity = CITY;
  textNumberPhone = NUMBER_PHONE;
  textOptions = OPTIONS;

  supplierModel!: SupplierModel [];


  constructor(private readLastSupplierUseCase: ReadLastSupplierUseCase){}

  modalEdit(index: number){
    this.SendSupplier.emit(this.supplierModel[index])
    this.modalActivateTwo.emit(true);
  }

  modalDelete(index: number){
    this.SendSupplierId.emit(this.supplierModel[index].supplierId);
    this.modalActivateTwo.emit(true);
  }

  ngOnInit(): void {
    this.readLastSupplier();
  }

  readLastSupplier(){
    this.readLastSupplierUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.supplierModel = res.objectResponse;
      },
      (error) => {
        console.error("Error en la solicitud: " + error);
      });
  }
}