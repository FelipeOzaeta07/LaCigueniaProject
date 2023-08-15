import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  imgAperturaAnterior = Imagen.IMG_APERTURA_ANTERIOR;
  imgTotalVentas = Imagen.IMG_APERTURA_TOTAL_VENTAS;
  totalAperturaAnterior: number = 0;
  totalVentaDiaAnterior: number = 0 ;

}
