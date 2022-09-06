import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  static log: boolean = false;
  constructor(private http: HttpClient, private cookies: CookieService) {}
  isLogged() {
    return LoginService.log;
  }
  setlogged(logValue: boolean) {
    LoginService.log = logValue;
  }
  setToken(token: any) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
  getUserLogged() {
    const token = this.getToken();
  }
}
