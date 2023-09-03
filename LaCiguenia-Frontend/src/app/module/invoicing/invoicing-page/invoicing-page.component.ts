import { Component } from '@angular/core';
import { DetailModel } from '@commons/domains/model/detail/DetailModel';
import { ProductModel } from '@commons/domains/model/product/ProductModel';

@Component({
  selector: 'app-invoicing-page',
  templateUrl: './invoicing-page.component.html',
  styleUrls: ['./invoicing-page.component.scss']
})
export class InvoicingPageComponent {

  modalOne!: boolean;
  modalTwo!: boolean;
  number: number = 1;
  detail!: DetailModel;
  detailInvoice: DetailModel [] = [];
  hashMap: { [productItem: string]: number } = {};


  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }

  modalActivateTwo(datos: boolean) {
    this.modalTwo = datos;
  }

  selectProducts(product: ProductModel) {
    const productName = product.productName;
    if (this.hashMap.hasOwnProperty(productName)) {
      this.hashMap[productName] += this.number;
    } else {
      this.hashMap[productName] = this.number;
    }

    const existingIndex = this.detailInvoice.findIndex((detail) => detail.productId.productName === productName);

    if (existingIndex !== -1) {
      this.detailInvoice[existingIndex].detailAmount = this.hashMap[productName];
    } else {
      this.detail = {
        detailId: 0,
        detailAmount: this.hashMap[productName],
        detailSubtotal: product.productPrice,
        productId: product,
      };
      this.setDetailModel(this.detail);
    }
  }

  setDetailModel(detail: DetailModel) {
    this.detailInvoice.push(detail);
  }

}