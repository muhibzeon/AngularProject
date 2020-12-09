import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SemesterPlanenComponent } from './semester-planen/semester-planen.component';
import { MeinSemesterComponent } from './semester-planen/mein-semester/mein-semester.component';
import { GesamtVeranstaltungenComponent } from './semester-planen/mein-semester/gesamt-veranstaltungen/gesamt-veranstaltungen.component';

const routes: Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: 'semester-planen', component: SemesterPlanenComponent},
  {path: 'mein-semester', component: MeinSemesterComponent  },
  {path: 'gesamt-veranstaltungen', component: GesamtVeranstaltungenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SemesterPlanenComponent, GesamtVeranstaltungenComponent, MeinSemesterComponent ]
