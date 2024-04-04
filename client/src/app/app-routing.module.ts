import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { AdminEventosComponent } from './componentes/admin-eventos/admin-eventos.component';
import { EventsComponent } from './componentes/events/events.component';
import { EventssComponent } from './componentes/eventss/eventss.component';
import { IndexComponent } from './componentes/index/index.component';
import { MainComponent } from './componentes/main/main.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { DetalleEventosComponent } from './componentes/detalle-eventos/detalle-eventos.component';
import { InfoEventoComponent } from './componentes/info-evento/info-evento.component';
import { CardsEventoComponent } from './componentes/cards-evento/cards-evento.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'administracion',
    component: AdminEventosComponent
  },
  {
    path: '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: EventsComponent
  },
  {
    path: 'eventss',
    component: EventssComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'editar-evento',
    component: DetalleEventosComponent
  },
  {
    path:' editar-evento/:id',
    component: DetalleEventosComponent
  },
  {
    path:' cards',
    component: CardsEventoComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'infoEvento/:id',
    component: InfoEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
