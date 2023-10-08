import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';
import { TEXT_ONE, TEXT_THREE, TEXT_TWO, SYMBOL, TEXT_TITLE, TEXT_CATEGORY  } from '@module/invoicing/invoicing-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})

export class SectionTwoComponent implements OnInit{
  
  @Output() selectProducts = new EventEmitter<ProductModel>();
  @Input() productSelector!: string;
  @Input() sendProductCategory!: ProductModel[];
  @Input() messageCategory!: boolean;

  textTitle = TEXT_TITLE;
  textItemOne = TEXT_ONE;
  textItemTwo = TEXT_TWO;
  textItemThree = TEXT_THREE;
  textSymbol = SYMBOL;
  textCategory = TEXT_CATEGORY;

  product!: ProductModel [];
  productGroups: ProductModel[] = [];
  message: boolean = true;

  constructor(private readProductsUseCase: ReadProductsUseCase){}


  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readProductsUseCase.execute().subscribe(
      (res: GenericResponse) => {
        if(res.message != "Operación fallida"){
          this.message = false;
          for(let item of res.objectResponse){
            this.productGroups.push(item)
          }
        }
      }
    )
  }

  selecProduct(productItem: ProductModel) {
    const index = this.productGroups.findIndex(item => item.productId === productItem.productId);

    if (index !== -1) {
      this.selectProducts.emit(this.productGroups[index]);
    }
  }
}
