import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreModel } from '@commons/domains/store/StoreModel';
import { UserModel } from '@commons/domains/user/UserModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE_USER, NAME_USER, PASSWORD_USER, CONFIRM_PASSWORD_USER, EMAIL_USER, ACCEPT_USER } 
from '@module/setup/setup-page/component/section-six/constans/section-six';
import { UpdateUserUseCase } from '@repository/user/case/UpdateUserUseCase';
import { UserSharedGetDataUseCase } from '@repository/user/case/UserSharedGetDataUseCase';

@Component({
  selector: 'app-section-six',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.scss']
})
export class SectionSixComponent {

  @Output() eventUpdateInformationUser = new EventEmitter<boolean>;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE_USER;
  textName = NAME_USER;
  textEmail = EMAIL_USER;
  textPassword = PASSWORD_USER;
  textConfirmPassword = CONFIRM_PASSWORD_USER;
  textAccept = ACCEPT_USER;

  userForm!: FormGroup;
  userModel!: UserModel;
  errorPassword: string = '';

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(public formulary: FormBuilder, private userSharedGetDataUseCase: UserSharedGetDataUseCase,
    private updateUserUseCase: UpdateUserUseCase){
    this.userForm = formulary.group({
      nameUser: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  updateUser(){
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if(this.userForm.controls['confirmPassword'].value === this.userForm.controls['password'].value){
      
      this.userModel = {
        userId: this.userSharedGetDataUseCase.execute(),
        userName: this.userForm.controls['nameUser'].value,
        userEmail: this.userForm.controls['userEmail'].value,
        userPassword: this.userForm.controls['password'].value,
      }
      
      this.updateUserUseCase.execute(this.userModel).subscribe(
        (genericResponse: GenericResponse) => {
          if (genericResponse.statusCode === 200) {
            this.modalEvent();
            this.eventUpdateUser();
          }
        },
        (error) => {
          console.log("Entramos el error: " + error);
          this.userForm.reset();
        }
      );
    }else{
      this.errorPassword = "Verificar Contraseña";
    }
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }

  eventUpdateUser(){
    this.eventUpdateInformationUser.emit(false);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
