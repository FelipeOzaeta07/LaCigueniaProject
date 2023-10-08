import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CategoryModel } from '@commons/domains/category/CategoryModel';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { ReadProductForCategoryUseCase } from '@repository/product/case/ReadProductForCategoryUseCase';
import { ReadProductForNameUseCase } from '@repository/product/case/ReadProductForNameUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})

export class SectionOneComponent implements OnInit{

  @Output() sendProductSelector = new EventEmitter<string>();
  @Output() sendProduct = new EventEmitter<ProductModel[]>();
  @ViewChild('productInput') productInput!: ElementRef;

  product!: ProductModel [];
  productSelection!: string;
  category!: CategoryModel [];
  productGroupsSelector: ProductModel[][] = [];

  constructor(private readCategoriesUseCase: ReadCategoriesUseCase, private readProductForCategoryUseCase: ReadProductForCategoryUseCase){}


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



  readProductForCategory(index: number){
    if(index !== 0){
      this.readProductForCategoryUseCase.execute(index).subscribe(
        (res: GenericResponse) => {
          if(res.message != "Operación fallida"){
            this.product = res.objectResponse;
            this.sendProduct.emit(this.product);
          }else{
            //Aqui activar el mensaje
            this.product = [];
            this.sendProduct.emit(this.product);
          }
        }
      )
    }else{
      this.product = [];
      this.sendProduct.emit(this.product);
    }
  }
  
  readProductAllProduct(){
    this.product = [];
    this.sendProduct.emit(this.product);
  }
}