import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-body-pant4',
  templateUrl: './body-pant4.component.html',
  styleUrls: ['./body-pant4.component.css'],
})
export class BodyPant4Component implements OnInit {
  firebas: any;
  constructor(private fire: FirebaseService) {}
  texto: string;

  guardar: any;
  ngOnInit(): void {}
}
