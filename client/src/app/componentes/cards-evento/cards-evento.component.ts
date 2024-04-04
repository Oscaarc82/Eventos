import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../services/evento.model';
import { Router } from '@angular/router';
import { ParticipanteService } from '../../services/participante.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-cards-evento',
  templateUrl: './cards-evento.component.html',
  styleUrl: './cards-evento.component.css'
})
export class CardsEventoComponent implements OnInit {
  eventos : Evento[] = []
  eventoSelected : string = ""
  areaEvento : string = ""

  constructor(private es : EventoService, private ps : ParticipanteService, private router : Router) {}

  ngOnInit(): void {
   this.getEventos();
  }

  getEventos() {
    this.es.getEvento().subscribe(res => {
      this.eventos = res;
    })
  }

  registrar() {
    /*const email = sessionStorage.getItem("Correo")
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
    }*/
    console.log("participar")
  }
}

/*
document.querySelectorAll(".projcard-description").forEach(function(box) {
  $clamp(box, {clamp: 6});
});
*/