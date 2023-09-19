import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  @Output() sendProductSelector = new EventEmitter<ProductModel[][]>();
  @ViewChild('productInput') productInput!: ElementRef;

  product!: ProductModel [];
  productSelection!: string;
  category!: CategoryModel [];
  productGroupsSelector: ProductModel[][] = [];

  constructor(private readCategoriesUseCase: ReadCategoriesUseCase, 
    private readProductForNameUseCase: ReadProductForNameUseCase){}

  ngOnInit(): void {
    this.getCategory();
  }

  readProductForName(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.readProductForNameUseCase.execute(this.productSelection).subscribe(
        (res: GenericResponse) => {
          if (res.statusCode == 200){
            this.product = res.objectResponse;
            const productsPerGroup = 5;
            let currentIndex = 0;
            
            while (currentIndex < this.product.length) {
              const productGroup = this.product.slice(currentIndex, currentIndex + productsPerGroup);
              this.productGroupsSelector.push(productGroup);
              currentIndex += productsPerGroup;
            }
            this.sendProductSelector.emit(this.productGroupsSelector);
            this.productGroupsSelector = [];
          }
        }, (error) => {
          console.log("Es Nulo")
        }
      )
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