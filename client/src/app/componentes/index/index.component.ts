import { Component, OnInit } from '@angular/core';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';
import { ParticipanteService } from '../../services/participante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  eventos : Evento[] = [];
  nomEvento : string = ""
  area : string = ""
  email = sessionStorage.getItem("Correo")
  eventoSelected : string = ""
  areaEvento : string = ""

  constructor(private es : EventoService, private ps : ParticipanteService, private router : Router) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos() {
    this.es.getEvento().subscribe(eventos => {
      this.eventos = eventos;
    })
  }

  rParticipante() {
    this.ps.addEvento(this.email, this.nomEvento, this.area).subscribe(res => {
      console.log("funcionando")
    })
  }

  registrar() {
    const email = sessionStorage.getItem("Correo")
    this.es.getArea(this.eventoSelected).subscribe(res => {
      this.areaEvento = res.Area
    })

    if (email != null) {
      this.ps.addEvento(email, this.eventoSelected, this.areaEvento).subscribe(res => {        
        console.log("participando")
      })
      this.router.navigate(['/index'])
    } else {
      this.router.navigate(['/login'])
    }
    console.log("participar")
  }
}
