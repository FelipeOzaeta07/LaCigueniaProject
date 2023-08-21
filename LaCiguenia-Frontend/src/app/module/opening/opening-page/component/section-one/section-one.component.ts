import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DATE, OPENING_BOX, STORE, TITLE, TOTAL } from '@module/opening/opening-page/component/section-one/constans/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  title = TITLE;
  textDate = DATE;
  textTotal = TOTAL;
  textStore = STORE;
  textOpeningBox = OPENING_BOX;
  
  BoxOpeningForm: FormGroup;
  openingBox!: number;
  store: string = "General";
  total!: number;
  date: string = new Date().toISOString().slice(0, 10);


  constructor(private formulario: FormBuilder, private router: Router){
    this.BoxOpeningForm = this.formulario.group({
      date: new FormControl(this.date, [Validators.required]),
      store: new FormControl(this.store, [Validators.required]),
      openingBox: new FormControl(this.openingBox, [Validators.required]),
      total: ['', [Validators.required]]
    });
  }

  useCase(){
    this.total = this.openingBox;
    this.BoxOpeningForm.patchValue({
      aperturaCaja: this.openingBox,
      total: this.total
    });
    if (this.BoxOpeningForm.valid){
      this.router.navigate(['/login-laciguenia/pago-page-principal']);
    }
  }
}
