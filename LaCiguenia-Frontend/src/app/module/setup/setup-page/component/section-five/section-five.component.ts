import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE_CATEGORY, SUBTITLE_CATEGORY, NAME_CATEGORY, DESCRIPTION_CATEGORY, ACCEPT_CATEGORY } 
from '@module/setup/setup-page/component/section-five/constans/section-five';
import { CreateCategoryUseCase } from '@repository/category/case/CreateCategoryUseCase';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent {

  @Output() eventCategoryAddComponent = new EventEmitter<boolean>;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITLE_CATEGORY;
  textSubTitle = SUBTITLE_CATEGORY;
  textName = NAME_CATEGORY;
  textDescription = DESCRIPTION_CATEGORY;
  textAccept = ACCEPT_CATEGORY;

  categoryForm!: FormGroup;
  categoryModel!: CategoryModel;

  constructor(public formulary: FormBuilder, private createCategoryUseCase: CreateCategoryUseCase){
    this.categoryForm = formulary.group({
      nameCategory: ['', [Validators.required]],
      descriptionCategory: ['', [Validators.required]]
    });
  }

  createMethodPayment(){
    if (!this.categoryForm.valid) {
      this.categoryForm.markAllAsTouched();
      return
    }

    this.categoryModel = {
      categoryId: 0,  
      categoryName: this.categoryForm.controls['nameCategory'].value,
      categoryDescription: this.categoryForm.controls['descriptionCategory'].value,
    }

    this.createCategoryUseCase.execute(this.categoryModel).subscribe(
      (res: GenericResponse) => {
        this.modalEvent();
        this.eventCategoryAdd();
      }
    );
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }

  eventCategoryAdd(){
    this.eventCategoryAddComponent.emit(false);
  }
}