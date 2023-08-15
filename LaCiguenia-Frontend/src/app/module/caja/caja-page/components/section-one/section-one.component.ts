import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  formularioAperturaCaja: FormGroup;
  aperturaCaja!: number;
  cajaMenor: number = 0;
  almacen: string = "General";
  total!: number;
  fecha: string = new Date().toISOString().slice(0, 10);;


  constructor(private formulario: FormBuilder, private router: Router){
    this.formularioAperturaCaja = this.formulario.group({
      fecha: new FormControl(this.fecha, [Validators.required]),
      almacen: new FormControl(this.almacen, [Validators.required]),
      aperturaCaja: new FormControl(this.aperturaCaja, [Validators.required]),
      total: ['', [Validators.required]],
      cajaMenor: new FormControl(this.cajaMenor, [Validators.required])
    });
  }

  enviarDatos(){
    this.total = this.aperturaCaja + this.cajaMenor;
    this.formularioAperturaCaja.patchValue({
      aperturaCaja: this.aperturaCaja,
      total: this.total,
      cajaMenor: this.cajaMenor
    });
    if (this.formularioAperturaCaja.valid){
      this.router.navigate(['/login-laciguenia/pago-page-principal']);
    }
  }
}