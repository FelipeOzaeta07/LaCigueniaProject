import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIRM_PASSWORD, TITLE, NAME, EMAIL, PASSWORD, DONE_CONDITIONS, TEXT, HERE } from '@module/register/register-page/component/section-one/constans/section-one';

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

  registerForm!: FormGroup

  constructor(public formulary: FormBuilder, public router: Router){
    this.registerForm = formulary.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassaword: ['', [Validators.required]]
    });
  }

}