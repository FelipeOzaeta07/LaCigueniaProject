import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CREATE_ACCOUNT, FORGOT_PASSWORD, HERE, NEED_HELP, SIGN_IN } from '@module/login/login-page/component/section-two/constans/section-two';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ServiceUserUseCase } from '@repository/user/case/ServiceUserUseCase';

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

  constructor(public formulary: FormBuilder, private serviceUserUseCase: ServiceUserUseCase, public router: Router){
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
          this.router.navigateByUrl('login-laciguenia/admin-page-principal');
          this.userForm.reset();
        } else {
          alert("Verificar Contraseña o Email");
          this.userForm.reset();
        }
      },
      (error) => {
        this.userForm.reset();
        this.errorMessage = "Correo Electronico o Contraseña incorrecta. verificar";
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
