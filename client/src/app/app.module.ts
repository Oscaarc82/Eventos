import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { AdminEventosComponent } from './componentes/admin-eventos/admin-eventos.component';
import { EventsComponent } from './componentes/events/events.component';
import { MainComponent } from './componentes/main/main.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { EventssComponent } from './componentes/eventss/eventss.component';
import { DetalleEventosComponent } from './componentes/detalle-eventos/detalle-eventos.component';
import { IndexComponent } from './componentes/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { InfoEventoComponent } from './componentes/info-evento/info-evento.component';
import { CardsEventoComponent } from './componentes/cards-evento/cards-evento.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    AdminEventosComponent,
    EventsComponent,
    MainComponent,
    NavigationComponent,
    EventssComponent,
    IndexComponent,
    DetalleEventosComponent,
    InfoEventoComponent,
    CardsEventoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule ,
    RouterModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
