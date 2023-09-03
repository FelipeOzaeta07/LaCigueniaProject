import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from '@commons/domains/model/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ProductsReadUseCase } from '@repository/product/case/ProductsReadUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit{
  
  @Output() selectProducts = new EventEmitter<ProductModel>();

  product!: ProductModel [];

  constructor(private productsReadUseCase: ProductsReadUseCase){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsReadUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.product = res.objectResponse;
      }
    )
  }

  selecProduct(index: number) {
    this.selectProducts.emit(this.product[index]);
  }

}
