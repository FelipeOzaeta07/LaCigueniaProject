import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreModel } from '@commons/domains/store/StoreModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { EXPENSES_DAY, NU_INVOICE, SALES_DAY, STORE, UTILITY_DAY, SYMBOL, SYMBOL_NUMBER } from '@module/admin/admin-page/component/section-one/constans/section-one';
import { ReadStoresUseCase } from '@repository/store/case/ReadStoresUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  @Input() salesTotalDay!: number;
  @Input() countInvoiceDay!: number;

  textGeneral = "General";
  textStore = STORE;
  textSalesDay = SALES_DAY;
  textNumberInvoice = NU_INVOICE;
  textExpensesDay = EXPENSES_DAY;
  textUtilityDay = UTILITY_DAY;
  textSymbol = SYMBOL;
  textSymbolNumber = SYMBOL_NUMBER;

  storeModel: StoreModel [] = [];
  storeForm!: FormGroup;

  constructor(public formulary: FormBuilder, private readStoresUseCase: ReadStoresUseCase){
    this.storeForm = formulary.group({
      storeSelect: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.readStores();
  }

  readStores(){
    this.readStoresUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for (let item of res.objectResponse){
          this.storeModel.push(item);
        }
      }
    );
  }

}
