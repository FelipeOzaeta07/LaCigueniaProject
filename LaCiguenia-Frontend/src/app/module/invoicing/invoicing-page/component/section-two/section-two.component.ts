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
  productMap: ProductModel [][] = [[], [], [], [], []];

  constructor(private productsReadUseCase: ProductsReadUseCase){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsReadUseCase.execute().subscribe(
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
    console.log("Prueba Producto: " + n + i);
    this.selectProducts.emit(this.productMap[n][i]);
  }

}
