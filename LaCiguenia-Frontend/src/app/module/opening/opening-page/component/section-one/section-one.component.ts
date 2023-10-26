import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpeningModel } from '@commons/domains/opening/OpeningModel';
import { StoreModel } from '@commons/domains/store/StoreModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DATE, OPENING_BOX, STORE, TITLE, TOTAL } from '@module/opening/opening-page/component/section-one/constans/section-one';
import { CreateOpeningUseCase } from '@repository/opening/case/CreateOpeningUseCase';
import { ReadStoresUseCase } from '@repository/store/case/ReadStoresUseCase';
import { SendOpeningService } from '@service/opening/implement/SendOpeningService';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  textTitle = TITLE;
  textDate = DATE;
  textTotal = TOTAL;
  textStore = STORE;
  textOpeningBox = OPENING_BOX;

  openingModel!: OpeningModel;
  
  openingBox!: number;
  store!: StoreModel;
  total!: number;
  date: string;
  boxOpeningForm!: FormGroup;
  storeForm!: FormGroup;
  storeModel: StoreModel [] = [];

  

  constructor(private formulary: FormBuilder, private router: Router, private createOpeningUseCase: CreateOpeningUseCase,
              private sendOpeningService: SendOpeningService, private readStoresUseCase: ReadStoresUseCase){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.date = year + '-' + month + '-' + day;

    this.storeForm = this.formulary.group({
      store: ['', [Validators.required]]
    });

    this.boxOpeningForm = this.formulary.group({
      date: [this.date, [Validators.required]],
      openingBox: [this.openingBox, [Validators.required]],
      total: ['', [Validators.required]],
      storeSelect: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.readStores();
  }

   readStores(){
    this.readStoresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for (let item of res.objectResponse){
          this.storeModel.push(item);
        }
      }
    );
  }

   createOpening(){
    this.boxOpeningForm.patchValue({
      openingBox: this.openingBox,
      total: this.openingBox
    });

    this.openingModel = {
      openingId: 0,
      openingDate: this.boxOpeningForm.controls['date'].value,
      openingTotal: this.boxOpeningForm.controls['openingBox'].value != null
        ? this.boxOpeningForm.controls['openingBox'].value
        : 0,
        storeEntity: this.storeForm.controls['store'].value,
    }

    this.createOpeningUseCase.execute(this.openingModel).subscribe(
      (res: GenericResponse) => {
        if(res.statusCode == 200){
          this.openingModel.openingId = res.objectId;
          this.sendOpeningService.updateOpeningModel(this.openingModel);
          this.router.navigate(['login-laciguenia/opening-page-principal/invoicing-page-principal'])
        }
      }
    )
  }
}
