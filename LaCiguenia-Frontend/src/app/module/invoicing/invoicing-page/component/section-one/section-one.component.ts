import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  productSelection!: string;
  category!: CategoryModel [];
  //Pendiente realizar la Query de consultar producto por nombre
  constructor(private readCategoriesUseCase: ReadCategoriesUseCase){}

  ngOnInit(): void {
    this.getCategory();
  }
  
  getCategory(){
    this.readCategoriesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.category = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }
}