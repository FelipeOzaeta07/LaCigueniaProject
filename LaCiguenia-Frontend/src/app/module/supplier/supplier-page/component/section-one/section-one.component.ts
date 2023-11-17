import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NAME_SUPPLIER, NIT, NUMBER_PHONE, ADDRESS, EMAIL, CITY, SAVE } 
from '@module/supplier/supplier-page/component/section-one/constans/section-one';
import { CreateSupplierUseCase } from '@repository/supplier/case/CreateSupplierUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE;
  textName = NAME_SUPPLIER;
  textNit = NIT;
  textNumberPhone = NUMBER_PHONE;
  textAddress = ADDRESS;
  textEmail = EMAIL;
  textCity = CITY;
  textSave = SAVE;

  supplierForm!: FormGroup;
  supplierModel!: SupplierModel;

  constructor(public formulary: FormBuilder, public router: Router, private createSupplierUseCase: CreateSupplierUseCase){

    this.supplierForm = formulary.group({
      nameSupplier: ['', [Validators.required]],
      nitSupplier: ['', [Validators.required]],
      numberPhoneSupplier: ['', [Validators.required]],
      emailSupplier: ['', [Validators.required, Validators.email]],
      addressSupplier: ['', [Validators.required]],
      citySupplier: ['', [Validators.required]],
    });
  }

  createSupplier(){
    if (!this.supplierForm.valid) {
      return this.supplierForm.markAllAsTouched();
    }

    this.supplierModel = {
      supplierId: 0,
      supplierName: this.supplierForm.controls['nameSupplier'].value,
      supplierNit: this.supplierForm.controls['nitSupplier'].value,
      supplierNumberPhone: this.supplierForm.controls['numberPhoneSupplier'].value,
      supplierAddress: this.supplierForm.controls['addressSupplier'].value,
      supplierEmail: this.supplierForm.controls['emailSupplier'].value,
      supplierCity: this.supplierForm.controls['citySupplier'].value,
    }

    this.createSupplierUseCase.execute(this.supplierModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.supplierModel.supplierId = res.objectId;

          this.supplierForm.reset();
          this.modalEvent();
        } else {
          alert("El Proovedor Ya Existe");
          this.supplierForm.reset();
          }
      },(error) => {
        console.log("error" + error)
        this.supplierForm.reset();
    });
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }
}