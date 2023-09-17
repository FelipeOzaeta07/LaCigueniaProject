import { Component, OnInit } from '@angular/core';
import { InformationGeneralInvoice } from '@commons/domains/invoice/InformationGeneralInvoice';
import { GenericResponse } from '@commons/response/GenericResponse';
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


  constructor(private readInformationGeneralInvoicesUseCase: ReadInformationGeneralInvoicesUseCase){}
  
  ngOnInit(): void {
    this.readInformationGeneralInvoices();
  }

  readInformationGeneralInvoices(){
    this.readInformationGeneralInvoicesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.salesTotalDay = res.objectResponse.salesTotalDay;
        this.salesTotalMonth = res.objectResponse.salesTotalMonth;
      }
    )
  }

  modalActivateOne(datos: boolean) {
    this.modalOne = datos;
  }
}
