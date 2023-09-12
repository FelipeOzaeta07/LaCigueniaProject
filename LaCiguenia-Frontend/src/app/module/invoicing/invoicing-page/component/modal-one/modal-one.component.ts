import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from '@commons/domains/model/customer/CustomerModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NAME_CUSTOMER, NUMBER_ID, NUMBER_PHONE, EMAIL, ADDRESS, DONE, FAIL } from '@module/invoicing/invoicing-page/component/modal-one/constans/modal-one';
import { CustomerCreateUseCase } from '@repository/customer/case/CustomerCreateUseCase';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() customerId = new EventEmitter<CustomerModel>();

  textTitle = TITLE;
  textName = NAME_CUSTOMER;
  textNumberId = NUMBER_ID;
  textNumberPhone = NUMBER_PHONE;
  textEmail = EMAIL;
  textAddress = ADDRESS;
  textDone = DONE;
  textFail = FAIL;

  customerForm!: FormGroup;
  customer!: CustomerModel;

  constructor(public formulary: FormBuilder, public router: Router, private customerCreateUseCase: CustomerCreateUseCase){
      this.customerForm = formulary.group({
        nameProduct: ['', [Validators.required]],
        numberId: ['', [Validators.required]],
        numberPhone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]]
    });
  }

  customerService(){
    if (!this.customerForm.valid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    this.customer = {
      customerId: 0,
      customerName: this.customerForm.controls['nameProduct'].value,
      customerIdentification: this.customerForm.controls['numberId'].value,
      customerPhoneNumber: this.customerForm.controls['numberPhone'].value,
      customerEmail: this.customerForm.controls['email'].value,
      customerAddress: this.customerForm.controls['address'].value
    }

    this.customerCreateUseCase.execute(this.customer).subscribe(
      (res: GenericResponse) => {
        this.customer.customerId = res.objectId;
        this.getCustomerId();
        this.modalEventOne();
      },
      (res: GenericResponse) => {}
    )
  }

  getCustomerId(){
    this.customerId.emit(this.customer);
  }

  modalEventOne() {
    const datos = false;
    this.modalActivateOne.emit(datos);
  }
}