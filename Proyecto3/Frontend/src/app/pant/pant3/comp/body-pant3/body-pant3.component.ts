import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-body-pant3',
  templateUrl: './body-pant3.component.html',
  styleUrls: ['./body-pant3.component.css'],
})
export class BodyPant3Component implements OnInit {
  firebas: any = [];
  constructor(private fire: FirebaseService) {}
  texto: string;

  ngOnInit(): void {}
  emailUpdated(event) {
    console.log(this.texto);
    this.fire.getDatosAll().subscribe((datos: any) => {
      this.firebas = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i]?.visitante?.nombreEquipo + '' === this.texto + '') {
          this.firebas.push(datos[i]);
          console.log(datos[i].local);
        }
      }
    });
  }
}
