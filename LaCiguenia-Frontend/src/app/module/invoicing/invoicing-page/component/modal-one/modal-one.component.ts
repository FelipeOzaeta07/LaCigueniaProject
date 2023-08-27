import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TITLE, NAME_CUSTOMER, NUMBER_ID, NUMBER_PHONE, EMAIL, ADDRESS, DONE, FAIL } from '@module/invoicing/invoicing-page/component/modal-one/constans/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();

  textTitle = TITLE;
  textName = NAME_CUSTOMER;
  textNumberId = NUMBER_ID;
  textNumberPhone = NUMBER_PHONE;
  textEmail = EMAIL;
  textAddress = ADDRESS;
  textDone = DONE;
  textFail = FAIL;

  customerForm!: FormGroup;

  constructor(public formulary: FormBuilder, public router: Router){
      this.customerForm = formulary.group({
        nameProduct: ['', [Validators.required]],
        numberId: ['', [Validators.required]],
        numberPhone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]]
    });
  }


  customerService(){
    console.log("Prueba Datos: " + this.customerForm.controls['nameProduct'].value);
    console.log("Prueba Datos: " + this.customerForm.controls['numberId'].value);
    console.log("Prueba Datos: " + this.customerForm.controls['numberPhone'].value);
    console.log("Prueba Datos: " + this.customerForm.controls['email'].value);
    console.log("Prueba Datos: " + this.customerForm.controls['address'].value);
    this.modalEventOne();
  }

  modalEventOne() {
    const datos = false;
    this.modalActivateOne.emit(datos);
  }

}
