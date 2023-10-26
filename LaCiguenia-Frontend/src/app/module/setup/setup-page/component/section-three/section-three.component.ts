import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreModel } from '@commons/domains/store/StoreModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CreateStoreUseCase } from '@repository/store/case/CreateStoreUseCase';
import { TITLE_STORE, NAME_STORE, NIT_STORE, TYPE_STORE, PHONE_NUMBER_STORE, EMAIL_STORE, CODE_STORE, CITY_STORE, ADDRESS_STORE, ACCEPT_STORE } 
from '@module/setup/setup-page/component/section-three/constans/section-three';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  @Output() eventStoreAddComponent = new EventEmitter<boolean>;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE_STORE;
  textName = NAME_STORE;
  textNIT = NIT_STORE;
  textType = TYPE_STORE;
  textPhoneNumber = PHONE_NUMBER_STORE;
  textEmail = EMAIL_STORE;
  textCode = CODE_STORE;
  textCity = CITY_STORE;
  textAddress = ADDRESS_STORE;
  textAccept = ACCEPT_STORE;

  storeForm!: FormGroup;
  storeModel!: StoreModel;

  constructor(public formulary: FormBuilder, private createStoreUseCase: CreateStoreUseCase){
    this.storeForm = formulary.group({
      nameStore: ['', [Validators.required]],
      numberNit: ['', [Validators.required]],
      typeStore: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      codeCIIU: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  eventStoreAdd(){
    this.eventStoreAddComponent.emit(false);
  }

  createStore(){
    if (!this.storeForm.valid) {
      this.storeForm.markAllAsTouched();
      return
    }

    this.storeModel = {
      storeId: 0,
      storeName: this.storeForm.controls['nameStore'].value,
      storeNumberNit: this.storeForm.controls['numberNit'].value,
      storeType: this.storeForm.controls['typeStore'].value,
      storePhoneNumber: this.storeForm.controls['phoneNumber'].value,
      storeEmail: this.storeForm.controls['email'].value,
      storeCodeCIIU: this.storeForm.controls['codeCIIU'].value,
      storeCity: this.storeForm.controls['city'].value,
      storeAddress: this.storeForm.controls['address'].value,
      storeStatus: 'Habilitado',
    }

    this.createStoreUseCase.execute(this.storeModel).subscribe(
      (res: GenericResponse) => {
        this.modalEvent();
        this.eventStoreAdd();
      }
    );
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }
}