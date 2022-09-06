import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpresService {
  constructor(private http: HttpClient) {}

  getDatosAllOrganizacions() {
    return this.http.get('http://localhost:3000/organizacions');
  }
  getDatosAllCopas() {
    return this.http.get('http://localhost:3000/copas');
  }
  getDatosIdOrganizacions(dato: string) {
    return this.http.get(`http://localhost:3000/organizacions/${dato}`);
  }
  getDatosIdCopas(dato: string) {
    return this.http.get(`http://localhost:3000/copas/${dato}`);
  }
}
