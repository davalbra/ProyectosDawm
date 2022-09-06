import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { BodyComponent } from './pant/login/comp/body/body.component';
import { LoginComponent } from './pant/login/pant/login/login.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ButtonSetComponent } from './pant/main/comp/button-set/button-set.component';
import { BodyMainComponent } from './pant/main/comp/body-main/body-main.component';
import { MainComponent } from './pant/main/pant/main/main.component';
import { BodyPant1Component } from './pant/pant1/comp/body-pant1/body-pant1.component';
import { MainPant1Component } from './pant/pant1/pant/main-pant1/main-pant1.component';
import { BodyPant2Component } from './pant/pant2/comp/body-pant2/body-pant2.component';
import { MainPant2Component } from './pant/pant2/pant/main-pant2/main-pant2.component';
import { MainPant3Component } from './pant/pant3/pant/main-pant3/main-pant3.component';
import { BodyPant3Component } from './pant/pant3/comp/body-pant3/body-pant3.component';
import { BodyPant4Component } from './pant/pant4/comp/body-pant4/body-pant4.component';
import { MainPant4Component } from './pant/pant4/pant/main-pant4/main-pant4.component';
import { HeaderMainComponent } from './pant/main/comp/header-main/header-main.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NavHeadComponent } from './pant/main/comp/nav-head/nav-head.component';
import { CardsMainComponent } from './pant/main/comp/cards-main/cards-main.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginComponent,
    ButtonSetComponent,
    BodyMainComponent,
    MainComponent,
    BodyPant1Component,
    MainPant1Component,
    BodyPant2Component,
    MainPant2Component,
    MainPant3Component,
    BodyPant3Component,
    BodyPant4Component,
    MainPant4Component,
    HeaderMainComponent,
    NavHeadComponent,
    CardsMainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [
    CookieService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
