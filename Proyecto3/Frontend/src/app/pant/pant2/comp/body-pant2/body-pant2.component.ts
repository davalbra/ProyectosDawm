import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-body-pant2',
  templateUrl: './body-pant2.component.html',
  styleUrls: ['./body-pant2.component.css'],
})
export class BodyPant2Component implements OnInit {
  firebas: any = [];
  constructor(private fire: FirebaseService) {}
  texto: string;

  ngOnInit(): void {}
  emailUpdated(event) {
    console.log(this.texto);
    this.fire.getDatosAll().subscribe((datos: any) => {
      this.firebas = [];
      for (let i = 0; i < datos.length; i++) {
        if (datos[i]?.local?.nombreEquipo + '' === this.texto + '') {
          this.firebas.push(datos[i]);
          console.log(datos[i].local);
        }
      }
    });
  }
}
