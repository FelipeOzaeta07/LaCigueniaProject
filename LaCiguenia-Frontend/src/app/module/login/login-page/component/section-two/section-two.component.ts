import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CREATE_ACCOUNT, FORGOT_PASSWORD, HERE, NEED_HELP, SIGN_IN, MESSAGE_ERROR } 
from '@module/login/login-page/component/section-two/constans/section-two';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ServiceUserUseCase } from '@repository/user/case/ServiceUserUseCase';
import { UserSharedSetDataUserCase } from '@repository/user/case/UserSharedSetDataUserCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  textSignIn = SIGN_IN;
  textForgotPassword = FORGOT_PASSWORD;
  textCreateAccount = CREATE_ACCOUNT;
  textNeedHelp = NEED_HELP;
  textHere = HERE;

  userForm!: FormGroup;
  errorMessage: string = '';

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(public formulary: FormBuilder, private serviceUserUseCase: ServiceUserUseCase, 
    public router: Router, private userSharedSetDataUserCase: UserSharedSetDataUserCase){

    this.userForm = formulary.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  userServices() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
  
    const params = {
      userEmail: this.userForm.controls['email'].value,
      userPassword: this.userForm.controls['password'].value,
    };
  
    this.serviceUserUseCase.execute(params).subscribe(
      (genericResponse: GenericResponse) => {
        if (genericResponse.statusCode === 200) {
          const VALUE_NUMBER = genericResponse.objectId;
          const VALUE_STRING = VALUE_NUMBER.toString();
          this.userSharedSetDataUserCase.execute(VALUE_STRING);
          this.router.navigateByUrl('login-laciguenia/admin-page-principal');
          this.userForm.reset();
        }
      },
      (error) => {
        this.userForm.reset();
        this.errorMessage = MESSAGE_ERROR;
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
