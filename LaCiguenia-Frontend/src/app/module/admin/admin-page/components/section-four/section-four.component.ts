import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit{

  proveedores: string[] = [];
  nombreProveedor: string = "nombreProveedor";
  nombreProveedorDos: string = "nombreProveedorDos";


  ngOnInit(): void {
    this.listaProveedores();
  }

  listaProveedores(){
    while (this.proveedores.length < 12){
      this.proveedores.push(this.nombreProveedor, this.nombreProveedorDos);
    }
  }

}