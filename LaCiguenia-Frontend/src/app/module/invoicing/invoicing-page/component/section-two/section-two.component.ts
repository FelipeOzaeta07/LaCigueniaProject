import { Component } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  nombreProducto: string = "Nombre Producto";
  valorProducto: number = 0;

  filas = [1, 2, 3, 4];

  productos = [
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto }
  ];

  emitirEvento() {
    console.log("Prueba Hijo Envio Datos: " + this.nombreProducto);
  }
}
