import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}
  getDatosAll() {
    return this.http.get(
      'https://proyecto3-5cccb-default-rtdb.firebaseio.com/collection.json'
    );
  }
  getDatosId(dato: string) {
    return this.http.get(
      `https://proyecto3-5cccb-default-rtdb.firebaseio.com/collection/${dato}.json`
    );
  }
}
