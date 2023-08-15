import { Component } from '@angular/core';

@Component({
  selector: 'app-pago-page',
  templateUrl: './pago-page.component.html',
  styleUrls: ['./pago-page.component.scss']
})
export class PagoPageComponent {

  valorDesdePadre!: string;

  manejarEventoHijo(mensaje: string) {
    console.log("Prueba Padre: " + mensaje);
    this.valorDesdePadre = mensaje;
  }


}
