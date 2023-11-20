import { Component, OnInit } from '@angular/core';
import { SupplierModel } from '@commons/domains/suppplier/SupplierModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { SUPPLIER } from '@module/admin/admin-page/component/section-four/constans/section-four';
import { ReadSuppliersUseCase } from '@repository/supplier/case/ReadSuppliersUseCase';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit{

  textSuplier = SUPPLIER;
  supplierArray: SupplierModel [] = [];

  constructor(private readSuppliersUseCase: ReadSuppliersUseCase){}

  ngOnInit(): void {
    this.readSuppliers();
  }

  readSuppliers(){
    this.readSuppliersUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.supplierArray.push(item);
        }
      }
    );
  }
}