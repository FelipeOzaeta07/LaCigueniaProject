import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-navbar',
  templateUrl: './section-navbar.component.html',
  styleUrls: ['./section-navbar.component.scss']
})

export class SectionNavbarComponent {
  imagenPrincipal = Imagen.IMG_PRINCIPAL;
  imagenCaja = Imagen.IMG_CAJA;
  imagenInventario = Imagen.IMG_INVENTARIO;
  imagenVentas = Imagen.IMG_VENTAS;
  imagenProveedores = Imagen.IMG_PROVEEDORES;
  imagenInformes = Imagen.IMG_INFORMES;
}