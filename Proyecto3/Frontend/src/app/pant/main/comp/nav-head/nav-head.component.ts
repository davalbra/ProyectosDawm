import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ComunicationService } from 'src/app/servicios/comunication.service';
import { ExpresService } from 'src/app/servicios/expres.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.css'],
})
export class NavHeadComponent implements OnInit {
  orga: any[] = [];
  cop: any = [];
  copView = [];
  firebas: any = [];
  @Input('aria-label') ariaLabel: string;
  constructor(
    private expres: ExpresService,
    private fire: FirebaseService,
    private servicioFavorito: ComunicationService
  ) {}
  @Input('label') textLabel: string;
  ngOnInit(): void {
    this.expres.getDatosAllOrganizacions().subscribe((datos: any[]) => {
      this.orga = datos;
    });
    this.expres.getDatosAllCopas().subscribe((datos) => {
      this.cop = datos;
    });
    this.fire.getDatosAll().subscribe((datos) => {
      this.firebas = datos;
    });
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    const det = [];
    for (let i = 0; i < this.cop.length; i++) {
      if (this.cop[i]?.organizacionid === tabChangeEvent.index) {
        det.push(this.cop[i].nombre);
      }
    }
    this.copView = det;
  }
  onClick(date) {
    this.servicioFavorito.disparadorDeLiga.emit({
      data: date,
    });
  }
}
