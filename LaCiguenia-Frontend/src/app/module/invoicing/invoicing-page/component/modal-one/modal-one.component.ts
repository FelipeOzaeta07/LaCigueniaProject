import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from '@commons/domains/customer/CustomerModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, NAME_CUSTOMER, NUMBER_ID, NUMBER_PHONE, EMAIL, ADDRESS, DONE, FAIL, TITLE_EDIT } 
from '@module/invoicing/invoicing-page/component/modal-one/constans/modal-one';
import { CreateCustomerUseCase } from '@repository/customer/case/CreateCustomerUseCase';
import { CustomerUpdateUseCase } from '@repository/customer/case/CustomerUpdateUseCase';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Input() customerUpdate!: CustomerModel;
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() customerId = new EventEmitter<CustomerModel>();
  @Output() modalActivateFour = new EventEmitter<boolean>();
  @Output() modalActivateFive = new EventEmitter<boolean>();

  textTitleEdit = TITLE_EDIT;
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

  constructor(public formulary: FormBuilder, public router: Router, private createCustomerUseCase: CreateCustomerUseCase,
              private customerUpdateUseCase: CustomerUpdateUseCase){
      this.customerForm = formulary.group({
        nameProduct: ['', [Validators.required]],
        numberId: ['', [Validators.required]],
        numberPhone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]]
    });
  }

  editCustomerService(){

    this.customer = {
      customerId: this.customerUpdate.customerId,
      customerName: this.customerForm.controls['nameProduct'].value != ''
        ? this.customerForm.controls['nameProduct'].value
        : this.customerUpdate.customerName,
      customerIdentification: this.customerForm.controls['numberId'].value != ''
        ? this.customerForm.controls['numberId'].value
        : this.customerUpdate.customerIdentification,
      customerPhoneNumber: this.customerForm.controls['numberPhone'].value != ''
        ? this.customerForm.controls['numberPhone'].value
        : this.customerUpdate.customerPhoneNumber,
      customerEmail: this.customerForm.controls['email'].value != ''
        ? this.customerForm.controls['email'].value
        : this.customerUpdate.customerEmail,
      customerAddress: this.customerForm.controls['address'].value != ''
        ? this.customerForm.controls['address'].value
        : this.customerUpdate.customerAddress
    }

    this.customerUpdateUseCase.execute(this.customer).subscribe(
      (res: GenericResponse) => {
        if(res.statusCode == 200){
          this.getCustomerId();
          this.modalEventOne();
          this.modalEventFive();
        }
      }
    )
  }

  createCustomer(){
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

    this.createCustomerUseCase.execute(this.customer).subscribe(
      (res: GenericResponse) => {
        this.customer.customerId = res.objectId;
        this.getCustomerId();
        this.modalEventOne();
        this.modalEventFour();
      }
    )
  }

  getCustomerId(){
    this.customerId.emit(this.customer);
  }

  modalEventOne() {
    this.modalActivateOne.emit(false);
  }

  modalEventFour() {
    this.modalActivateFour.emit(true);
  }

  modalEventFive() {
    this.modalActivateFive.emit(true);
  }
}