import { Component, EventEmitter, Output } from '@angular/core';
import { ExpenseModel } from '@commons/domains/expense/ExpenseModel';
import { INVOICE, TITLE, DATE, PLACE, VALUE, OPTION } 
from '@module/expense/expense-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() modalActivateThree = new EventEmitter<boolean>();

  textTitle = TITLE;
  textInvoice = INVOICE;
  textDate = DATE;
  textPlace = PLACE;
  textValue = VALUE;
  textOption = OPTION;

  currentDate!: string;
  expenseModel!: ExpenseModel[];

  constructor( ){ 
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;}

  modalEdit(_index: number) {
    this.modalActivateTwo.emit(true);
    console.log("Prueba editar");
  }

  modalDelete(_index: number) {
    this.modalActivateThree.emit(true);
    console.log("Prueba eliminar");
  }
}