import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpeningModel } from '@commons/domains/model/opening/OpeningModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DATE, OPENING_BOX, STORE, TITLE, TOTAL } from '@module/opening/opening-page/component/section-one/constans/section-one';
import { OpeningCreateUseCase } from '@repository/opening/case/OpeningCreateUseCase';

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

  openingModel!: OpeningModel;
  
  openingBox!: number;
  store: string = "General";
  total!: number;
  date: string = new Date().toISOString().slice(0, 10);
  boxOpeningForm!: FormGroup;
  

  constructor(private formulario: FormBuilder, private router: Router, private openingCreateUseCase: OpeningCreateUseCase){
    this.boxOpeningForm = this.formulario.group({
      date: [this.date, [Validators.required]],
      store: [this.store, [Validators.required]],
      openingBox: [this.openingBox, [Validators.required]],
      total: ['', [Validators.required]]
    });
   }

  createOpening(){
    this.boxOpeningForm.patchValue({
      openingBox: this.openingBox,
      total: this.openingBox
    });

    this.openingModel = {
      openingId: 0,
      openingDate: this.boxOpeningForm.controls['date'].value,
      openingStore: this.boxOpeningForm.controls['store'].value,
      openingTotal: this.boxOpeningForm.controls['openingBox'].value,
    }

    this.openingCreateUseCase.execute(this.openingModel).subscribe(
      (res: GenericResponse) => {
        console.log("Prueba Respuesta: " + res.message);
        if(res.statusCode == 200){
          this.router.navigate(['login-laciguenia/opening-page-principal/invoicing-page-principal'])
        }
      }
    )
  }
}
