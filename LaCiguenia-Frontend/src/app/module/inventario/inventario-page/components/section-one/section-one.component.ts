import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  codigo: String;
  precio: number;
  cantidad: number;
  categoria: String;
  

  // Otras propiedades del producto
}

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  listaProductos: Producto[] = [
    { id: 1, nombre: 'Producto 1', codigo: 'C0-001', precio: 10, cantidad: 5, categoria: 'tipico'},
    { id: 2, nombre: 'Producto 2', codigo: 'C0-002', precio: 20, cantidad: 10, categoria: 'baile'},
    // Agregar más productos aquí
  ];

  productoEditando: Producto | null = null;

  editarProducto(producto: Producto) {
    this.productoEditando = { ...producto };
     // Clonar el producto para no modificar el original
     console.log("prueba:" + producto.id);
  }

  guardarCambios() {
    // Aquí podrías implementar la lógica para guardar los cambios realizados al producto
    // Por ejemplo, llamar a un servicio o actualizar la lista de productos en memoria
    this.productoEditando = null; // Terminar el modo de edición
  }

  cancelarEdicion() {
    this.productoEditando = null; // Cancelar la edición y volver al estado normal
  }

  borrarProducto(index: number) {
    // Implementar la lógica para borrar el producto de la lista
    this.listaProductos.splice(index, 1);
    console.log( "prueba de eliminacion")
  }
 
 
  }
  
