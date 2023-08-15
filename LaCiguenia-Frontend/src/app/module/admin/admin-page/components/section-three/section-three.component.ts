import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  imgVenta = Imagen.IMG_VENTA_TOTAL;
  imgFactura = Imagen.IMG_FACTURA_TOTAL;
  imgGastos = Imagen.IMG_GASTOS_TOTAL;
  imgUtilidad = Imagen.IMG_UTILIDAD_TOTAL;
  

}
