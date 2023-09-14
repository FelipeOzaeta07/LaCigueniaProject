import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '@commons/domains/user/UserModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CONFIRM_PASSWORD, TITLE, NAME, EMAIL, PASSWORD, DONE_CONDITIONS, TEXT, HERE } from '@module/register/register-page/component/section-one/constans/section-one';
import { CreateUserUseCase } from '@repository/user/case/CreateUserUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnChanges {

  @Input() modal!: boolean;
  @Output() modalActivate = new EventEmitter<boolean>();
  
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

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(public formulary: FormBuilder, public router: Router, private createUserUseCase: CreateUserUseCase){
    this.registerForm = formulary.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.modal == false){
      this.router.navigateByUrl('login-laciguenia');
      this.registerForm.reset();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  createUser(){
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
      
      this.createUserUseCase.execute(this.userModel).subscribe(
        (genericResponse: GenericResponse) => {
          if (genericResponse.statusCode === 200) {
            this.modalEvent();
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

  modalEvent() {
    this.modalActivate.emit(true);
  }
}