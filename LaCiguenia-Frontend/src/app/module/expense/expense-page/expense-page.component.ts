import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-page',
  templateUrl: './expense-page.component.html',
  styleUrls: ['./expense-page.component.scss']
})
export class ExpensePageComponent {
  
  modal!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;

  modalActivate(datos: boolean){
    this.modal = datos;
    if(datos === false){
      window.location.reload();
    }
  }

  modalActivateOne(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
  }
}
