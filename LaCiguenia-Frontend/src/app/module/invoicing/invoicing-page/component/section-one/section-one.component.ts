import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { ReadProductForNameUseCase } from '@repository/product/case/ReadProductForNameUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})

export class SectionOneComponent implements OnInit{

  @Output() sendProductSelector = new EventEmitter<string>();
  @ViewChild('productInput') productInput!: ElementRef;

  product!: ProductModel [];
  productSelection!: string;
  category!: CategoryModel [];
  productGroupsSelector: ProductModel[][] = [];

  constructor(private readCategoriesUseCase: ReadCategoriesUseCase){}


  ngOnInit(): void {
    this.getCategory();
  }

  readProductForName(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendProductSelector.emit(this.productSelection);
    }
  }

  ngAfterViewInit() {
      this.productInput.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => {
          this.readProductForName(event);
      });
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