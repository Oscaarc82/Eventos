import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';
import { Area } from '../../services/area.model'
import { Evento } from '../../services/evento.model'
import { EventoService } from '../../services/evento.service';
import { Router, RouterLink } from '@angular/router';
import { Ciudad } from '../../services/ciudad.model';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.css']
})
export class AdminEventosComponent implements OnInit {
  
  areas : Area[] = [];
  ciudades : Ciudad[] = [];
  evento : Evento = {    
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
  }
  ciudad : Ciudad = {
    NomCiudad : ''
  }
  
  constructor (
    private as : AreaService, 
    private es : EventoService,
    private cs : CiudadService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAllAreas();
    this.getAllCiudades();
  }

  getAllAreas() : void {
    this.as.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);      
    })
  }

  getAllCiudades() : void {
    this.cs.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
      console.log(ciudades);
    })
  }

  saveEvento() {
    this.es.saveEvento(this.evento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/eventos']);
      },
      err => console.log(err)
    )      
  }

  saveCiudad() {
    this.cs.saveCiudad(this.ciudad).subscribe(
      res => {
        this.router.navigate(['/eventos']);
      },
      err => console.error(err)
    )
  }
}
