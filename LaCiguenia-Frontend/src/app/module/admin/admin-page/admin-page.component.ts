import { Component, OnInit } from '@angular/core';
import { DetailProductMoreSold } from '@commons/domains/detail/DetailProductMoreSold';
import { InformationGeneralInvoice } from '@commons/domains/invoice/InformationGeneralInvoice';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DetailProductoMoreSoldUseCase } from '@repository/detail/case/DetailProductoMoreSoldUseCase';
import { ReadExpenseForMonthUseCase } from '@repository/expense/case/ReadExpenseForMonthUseCase';
import { ReadExpensesForOpeningUseCase } from '@repository/expense/case/ReadExpensesForOpeningUseCase';
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
  expenseTotalDay!: number;
  expenseTotalMonth!: number;
  countInvoiceDay!: number;
  countInvoiceMonth!: number;
  product!: DetailProductMoreSold;
  detailProduct!: DetailProductMoreSold [];
  productMoreSold: DetailProductMoreSold [][] = [];

  constructor(private readInformationGeneralInvoicesUseCase: ReadInformationGeneralInvoicesUseCase,
              private detailProductoMoreSoldUseCase : DetailProductoMoreSoldUseCase, private readExpensesForOpeningUseCase: ReadExpensesForOpeningUseCase,
              private readExpenseForMonthUseCase: ReadExpenseForMonthUseCase){}
  
  ngOnInit(): void {
    this.readInformationGeneralInvoices();
    this.detailProductoMoreSold();
    this.readExpensesForOpening();
    this.readExpenseForMonth();
  }

  readInformationGeneralInvoices(){
    this.readInformationGeneralInvoicesUseCase.execute().subscribe(
      (res: GenericResponse) => {
          this.salesTotalDay = res.objectResponse.salesTotalDay;
          this.salesTotalMonth = res.objectResponse.salesTotalMonth;
          this.countInvoiceDay = res.objectResponse.countInvoiceDay;
          this.countInvoiceMonth = res.objectResponse.countInvoiceMonth;
      },(error) => {
        this.salesTotalDay = 0;
        this.salesTotalMonth = 0;
        this.countInvoiceDay = 0;
        this.countInvoiceMonth = 0;
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

  readExpenseForMonth(){
    this.readExpenseForMonthUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.expenseTotalMonth = res.objectResponse;
      },(error) => {
        this.expenseTotalMonth = 0;
      }
    );
  }

  readExpensesForOpening(){
    this.readExpensesForOpeningUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.expenseTotalDay = res.objectResponse;
      },(error) => {
        this.expenseTotalDay = 0;
      }
    );
  }

  sendDetailProductMoreSold(detailProduct: DetailProductMoreSold){
    this.product = detailProduct;
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }
}
