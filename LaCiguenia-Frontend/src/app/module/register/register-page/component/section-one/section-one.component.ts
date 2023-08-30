import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '@commons/domains/model/user/UserModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CONFIRM_PASSWORD, TITLE, NAME, EMAIL, PASSWORD, DONE_CONDITIONS, TEXT, HERE } from '@module/register/register-page/component/section-one/constans/section-one';
import { UserCreateUseCase } from '@repository/user/case/UserCreateUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  textTitle = TITLE;
  textName = NAME;
  textEmail = EMAIL;
  textPassword = PASSWORD;
  textConfirmPassword = CONFIRM_PASSWORD;
  textDoneConditions = DONE_CONDITIONS;
  textText = TEXT;
  textHere = HERE;

  registerForm!: FormGroup;
  userModel!: UserModel;

  constructor(public formulary: FormBuilder, public router: Router, private userCreateUseCase: UserCreateUseCase){
    this.registerForm = formulary.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  userCreate(){
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if(this.registerForm.controls['confirmPassword'].value === this.registerForm.controls['password'].value){
      
      this.userModel = {
        userId: 0,
        userName: this.registerForm.controls['name'].value,
        userEmail: this.registerForm.controls['email'].value,
        userPassword: this.registerForm.controls['password'].value,
      }
      
      this.userCreateUseCase.execute(this.userModel).subscribe(
        (genericResponse: GenericResponse) => {
          if (genericResponse.statusCode === 200) {
            this.router.navigateByUrl('login-laciguenia');
            this.registerForm.reset();
          } else {
            alert("Verificar Contraseña o Email");
            this.registerForm.reset();
          }
        },
        (error) => {
          console.error('Error en la suscripción:', error);
          alert("Ocurrió un error al procesar la solicitud");
          this.registerForm.reset();
        }
      );
    }else{
      alert("Verificar Contraseña");
    }
  }
}