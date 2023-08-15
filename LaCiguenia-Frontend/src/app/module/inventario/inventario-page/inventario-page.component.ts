import { Component } from '@angular/core';
import { UserCreateUserCase } from 'src/app/domains/case/user/UserCreateUserCase';

@Component({
  selector: 'app-inventario-page',
  templateUrl: './inventario-page.component.html',
  styleUrls: ['./inventario-page.component.scss']
})
export class InventarioPageComponent {

  constructor(private llamadoCasoUso: UserCreateUserCase){

  }

  login(){
    this.llamadoCasoUso.execute({userEmail: '', userPassword: ''}).subscribe(
      (response) => console.log(response)
    );
  }

}
