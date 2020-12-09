import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { BodyComponent } from './body/body.component';
import { BottomComponent } from './bottom/bottom.component';
import { LoginComponent } from './header/login/login.component';
import { ListOfOptionsComponent } from './header/list-of-options/list-of-options.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

import { VeranstaltungComponent } from './veranstaltung/veranstaltung.component';

import { SemesterVeranstaltungenComponent } from './semester-planen/mein-semester/semester-veranstaltungen/semester-veranstaltungen.component';
import { StudienplanComponent } from './semester-planen/mein-semester/studienplan/studienplan.component';
import { KalendarComponent } from './semester-planen/kalendar/kalendar.component';



 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent, 
    ButtonComponent,
    BodyComponent,
    BottomComponent,
    LoginComponent,
    ListOfOptionsComponent,
    FooterComponent,
    routingComponents,
    VeranstaltungComponent,

    
    SemesterVeranstaltungenComponent,
    StudienplanComponent,
    KalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
