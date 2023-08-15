import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent{

  @Input() dato!: string;
  
  nombreProducto: string = this.dato;
  cantidad: number = 0;
  total: number = 0;
  subtotal: number = 0;

}