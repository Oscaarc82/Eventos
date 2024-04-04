import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { Area } from '../../services/area.model';
import { Ciudad } from '../../services/ciudad.model';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-detalle-eventos',
  templateUrl: './detalle-eventos.component.html',
  styleUrls: ['./detalle-eventos.component.css']
})
export class DetalleEventosComponent implements OnInit {
  areas: Area[] = [];
  evento: Evento = {
    _id: '',
    NomEvento: '',
    Ciudad: '',
    Area: '',
    Descripcion: '',
    FechaInicio: '', 
    FechaFin: '',
    Cupo: 0,
    Imagen: '',
    Participantes: 0,
    Asistentes: 0
  };
  ciudades : Ciudad[] = [];

  eventoEditado : Evento = { ...this.evento };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private es: EventoService,
    private as: AreaService,
    private cs: CiudadService
  ) {}

  ngOnInit(): void {
    this.getEvento();
    this.cargarAreas();
    this.cargarCiudades();
  }

  cargarAreas() {
    this.as.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);
    })
  }

  cargarCiudades() {
    this.cs.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
      console.log(ciudades);
    })
  }

  getEvento(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.es.getEventoById(id).subscribe(
        evento => {
          this.evento = evento;
          this.eventoEditado = { ...evento };
        },
        error => {
          console.error('Error al obtener el evento:', error);
        }
      );
    }
  }

  guardarCambios(): void {
    this.es.updateEvento(this.eventoEditado).subscribe(
      () => {
        this.router.navigate(['/eventos']);
      },
      error => {
        console.error('Error al actualizar el evento:', error);
      }
    );
  }
}
