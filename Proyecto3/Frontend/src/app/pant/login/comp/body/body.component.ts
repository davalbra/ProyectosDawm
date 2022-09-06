import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  user: string = 'david@espol.com';
  pass: string = 'hola';
  token: string = 'tokentoken';
  onLogin() {
    if (this.email.value === this.user && this.password.value === this.pass) {
      this.authService.setlogged(true);
      this.authService.setToken(this.token);
      this.router.navigate(['/main']);
    }
  }
  matcher = new MyErrorStateMatcher();

  // ******correo******
  get email() {
    return this.form.get('username');
  }
  get isEmailValid() {
    return this.email?.touched && this.email.valid;
  }
  get isEmailInValid() {
    return this.email?.touched && this.email.invalid;
  }
  // ******contrasenia******
  get password() {
    return this.form.get('password');
  }
  get isPasswordValid() {
    return this.password?.touched && this.password.valid;
  }
  get isPasswordInValid() {
    return this.password?.touched && this.password.invalid;
  }
}
