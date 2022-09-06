import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
@Injectable()
export class MainComponent implements OnInit {
  constructor(private authService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {}
  equipo: any = [
    {
      id: '',
      copa: '',
      local: {
        equipo: '',
        fueraDeJuego: '',
        amarillas: '',
        rojas: '',
        goles: '',
        golestimer: [''],
      },
      visitante: {
        equipo: '',
        fueraDeJuego: '',
        amarillas: '',
        rojas: '',
        goles: '',
        golestimer: [''],
      },
    },
  ];
}
