import { Component, OnInit } from '@angular/core';
import { DetailProductMoreSold } from '@commons/domains/detail/DetailProductMoreSold';
import { InformationGeneralInvoice } from '@commons/domains/invoice/InformationGeneralInvoice';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DetailProductoMoreSoldUseCase } from '@repository/detail/case/DetailProductoMoreSoldUseCase';
import { ReadInformationGeneralInvoicesUseCase } from '@repository/invoice/case/ReadInformationGeneralInvoicesUseCase';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{

  modalOne!: boolean;
  salesTotalDay!: number;
  salesTotalMonth!: number;
  countInvoiceDay!: number;
  countInvoiceMonth!: number;
  product!: DetailProductMoreSold;
  detailProduct!: DetailProductMoreSold [];
  productMoreSold: DetailProductMoreSold [][] = [];

  constructor(private readInformationGeneralInvoicesUseCase: ReadInformationGeneralInvoicesUseCase,
              private detailProductoMoreSoldUseCase : DetailProductoMoreSoldUseCase){}
  
  ngOnInit(): void {
    this.readInformationGeneralInvoices();
    this.detailProductoMoreSold();
  }

  readInformationGeneralInvoices(){
    this.readInformationGeneralInvoicesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.salesTotalDay = res.objectResponse.salesTotalDay;
        this.salesTotalMonth = res.objectResponse.salesTotalMonth;
        this.countInvoiceDay = res.objectResponse.countInvoiceDay;
        this.countInvoiceMonth = res.objectResponse.countInvoiceMonth;
      }
    )
  }

  detailProductoMoreSold(){
    this.detailProductoMoreSoldUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.detailProduct = res.objectResponse;
        const productsPerGroup = 2;
        let currentIndex = 0;
        
        while (currentIndex < this.detailProduct.length) {
          const productGroup = this.detailProduct.slice(currentIndex, currentIndex + productsPerGroup);
          this.productMoreSold.push(productGroup);
          currentIndex += productsPerGroup;
        }
      }
    )
  }

  sendDetailProductMoreSold(detailProduct: DetailProductMoreSold){
    this.product = detailProduct;
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }
}
