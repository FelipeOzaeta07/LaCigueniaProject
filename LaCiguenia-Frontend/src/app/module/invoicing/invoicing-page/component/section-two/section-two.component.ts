import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})

export class SectionTwoComponent implements OnInit, OnChanges{
  
  @Output() selectProducts = new EventEmitter<ProductModel>();
  @Input() productSelector!: string;


  product!: ProductModel [];
  productGroups: ProductModel[] = [];

  constructor(private readProductsUseCase: ReadProductsUseCase){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['productSelector']){
      
    }
  }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readProductsUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.productGroups.push(item)
        }
      }
    )
  }

  selecProduct(i: number) {
    this.selectProducts.emit(this.productGroups[i]);
  }
}
