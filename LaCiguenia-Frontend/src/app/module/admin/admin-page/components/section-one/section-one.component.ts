import { Component, OnInit } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  imgVenta = Imagen.IMG_VENTA_DIA;
  imgFactura = Imagen.IMG_FACTURA_DIA;
  imgGastos = Imagen.IMG_GASTOS_DIA;
  imgUtilidad = Imagen.IMG_UTILIDAD_DIA;

}