import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DATE, OPENING_BOX, STORE, TITLE, TOTAL } from '@module/opening/opening-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  textTitle = TITLE;
  textDate = DATE;
  textTotal = TOTAL;
  textStore = STORE;
  textOpeningBox = OPENING_BOX;
  
  openingBox!: number;
  store: string = "General";
  total!: number;
  date: string = new Date().toISOString().slice(0, 10);
  BoxOpeningForm!: FormGroup;
  

  constructor(private formulario: FormBuilder, private router: Router){
    this.BoxOpeningForm = this.formulario.group({
      date: [this.date, [Validators.required]],
      store: [this.store, [Validators.required]],
      openingBox: [this.openingBox, [Validators.required]],
      total: ['', [Validators.required]]
    });
   }

  useCase(){
    this.BoxOpeningForm.patchValue({
      openingBox: this.openingBox,
      total: this.openingBox
    });

    if (this.BoxOpeningForm.valid){
      console.log("prueba Datos: " + this.BoxOpeningForm.valid);
      this.router.navigate(['/login-laciguenia/opening-page-principal/invoicing-page-principal']);
    }
  }
}
