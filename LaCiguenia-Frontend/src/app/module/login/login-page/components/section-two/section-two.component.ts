import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  formularioLogin:FormGroup;

  imagenLogin = Imagen.IMG_LOGIN;

  constructor (public formulario: FormBuilder, private route: ActivatedRoute){
    this.formularioLogin = this.formulario.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

}