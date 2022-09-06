import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/servicios/comunication.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css'],
})
export class BodyMainComponent implements OnInit {
  firebas: any = [];
  constructor(
    private servicioFavorito: ComunicationService,
    private fire: FirebaseService
  ) {}
  public listdeVideos: any;
  valor: any;
  ngOnInit(): void {
    this.servicioFavorito.disparadorDeLiga.subscribe((data) => {
      this.listdeVideos = data?.data;

      this.fire.getDatosAll().subscribe((datos: any) => {
        this.firebas = [];
        for (let i = 0; i < datos.length; i++) {
          if (datos[i]?.copa + '' === data?.data + '') {
            this.firebas.push(datos[i]);
            console.log(datos[i].local);
          }
        }
      });
    });
  }
}
