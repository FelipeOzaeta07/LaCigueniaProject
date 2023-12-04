import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericResponse } from '@commons/response/GenericResponse';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';
import { UpdateSupplierUseCase } from '@repository/supplier/case/UpdateSupplierUseCase';
import { ADDRESS, CITY, DONE, EMAIL, FAIL, NAME_SUPPLIER, NIT_RUT, NUMBER_PHONE, TITLE } from './constans/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() supplier!: SupplierModel;

  textTitle = TITLE;
  textNameSupplier = NAME_SUPPLIER;
  textNit = NIT_RUT;
  textEmail = EMAIL;
  textNumberPhone = NUMBER_PHONE;
  textAddress = ADDRESS;
  textCity = CITY;
  textDone = DONE;
  textFail = FAIL;

  supplierForm!: FormGroup;
  supplierModel!: SupplierModel;

  constructor(private updateSupplierUseCase: UpdateSupplierUseCase, public formulary: FormBuilder){

       this.supplierForm = formulary.group({
       nameSupplier: ['', [Validators.required]],
       nitSupplier: ['', [Validators.required]],
       emailSupplier: ['', [Validators.required, Validators.email]],
       numberPhoneSupplier: ['', [Validators.required]],
       addressSupplier: ['', [Validators.required]],
       citySupplier: ['', [Validators.required]],
     });
   }

  ngOnInit(): void {

  }


  modalEvent() {
    this.modalActivateOne.emit(false);
  }

  updateSuppliers(){

    this.supplierModel = {
      supplierId: this.supplier.supplierId,
      supplierName: this.supplierForm.controls['nameSupplier'].value != ''
        ? this.supplierForm.controls['nameSupplier'].value
        : this.supplier.supplierName,
      supplierNit: this.supplierForm.controls['nitSupplier'].value != ''
        ? this.supplierForm.controls['nitSupplier'].value
        : this.supplier.supplierNit,
      supplierEmail: this.supplierForm.controls['emailSupplier'].value != ''
        ? this.supplierForm.controls['emailSupplier'].value
        : this.supplier.supplierEmail,
      supplierNumberPhone: this.supplierForm.controls['numberPhoneSupplier'].value != ''
        ? this.supplierForm.controls['numberPhoneSupplier'].value
        : this.supplier.supplierNumberPhone,
      supplierAddress: this.supplierForm.controls['addressSupplier'].value != ''
        ? this.supplierForm.controls['addressSupplier'].value
        : this.supplier.supplierAddress,
      supplierCity: this.supplierForm.controls['citySupplier'].value != ''
        ? this.supplierForm.controls['citySupplier'].value
        : this.supplier.supplierCity,
    }

    this.updateSupplierUseCase.execute(this.supplierModel).subscribe(
      (res: GenericResponse) => {
          if(res.statusCode == 200){
            window.location.reload();
        } else {
          alert("Proveedor NO Existe");
          this.supplierForm.reset();
        }
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
        this.supplierForm.reset();
    });
  }
}