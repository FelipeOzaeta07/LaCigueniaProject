import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit{
  
  @Output() selectProducts = new EventEmitter<ProductModel>();

  product!: ProductModel [];
  productMap: ProductModel [][] = [[], [], [], [], []];

  constructor(private readProductsUseCase: ReadProductsUseCase){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.readProductsUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.product = res.objectResponse;
        for (let i = 0; i < this.product.length; i++) {
          const residue = i % 4;
          this.productMap[residue].push(this.product[i]);
        }
      }
    )
  }

  selecProduct(n: number, i: number) {
    this.selectProducts.emit(this.productMap[n][i]);
  }

}
