import { Component, OnInit } from '@angular/core';
import { ParticipanteService } from '../../services/participante.service';
import { Participante } from '../../services/participante.model';
import { Evento } from '../../services/evento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-info-evento',
  templateUrl: './info-evento.component.html',
  styleUrl: './info-evento.component.css'
})
export class InfoEventoComponent implements OnInit {
  participante : Participante = {
    NomParticipante : '',
    ApeMaterno: '',
    ApePaterno: '',
    Edad: 0,
    Genero: '',
    Telefono: '',
    Correo: '',
    Ciudad: '',
    Cargo: '',
    Contrasenia: ''
  }
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
  eventoEditado : Evento = { ...this.evento };
  participantes : Participante[] = []
  genero : string = ''

  constructor(private ps : ParticipanteService, private route : ActivatedRoute, private router : Router, private es : EventoService) { }

  ngOnInit(): void {
    this.getEvento();
  }

  getParticipantes() {
    this.ps.getAllParticipantes().subscribe(res => {
      this.participantes = res
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

  changeGender() {
    if (this.genero) {
      this.ps.getGender(this.genero, this.eventoEditado.NomEvento).subscribe(res => {
        this.participantes = res
        console.log(res)
      })
    } else {
      this.ps.getParticipantes(this.eventoEditado.NomEvento).subscribe(res => {
        this.participantes = res
        console.log(this.participantes)
      })
      console.log(this.genero)
    } 
  }
}
