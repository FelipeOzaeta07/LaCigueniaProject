import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  imgWhatsapp = Imagen.IMG_WHATSAPP;
  imgNotificaciones = Imagen.IMG_NOTIFICACION;
  imgUsuario = Imagen.IMG_USUARIO;
}
