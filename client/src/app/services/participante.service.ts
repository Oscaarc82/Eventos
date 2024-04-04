import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante } from './participante.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  URL = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }

  saveParticipante(participante : Participante) {
    return this.http.post(`${this.URL}/participante`, participante);
  }

  getAllParticipantes() : Observable<Participante[]> {
    return this.http.get<Participante[]>(`${this.URL}/participante`)
  }

  getOneParticipante(id : string) : Observable<Participante> {
    return this.http.get<Participante>(`${this.URL}/participante/${id}`);
  }

  getUsuario(email : string) : Observable<Participante> {
    return this.http.get<Participante[]>(`${this.URL}/participante/login/${email}`).pipe(
      map(participantes => participantes[0])
    );
  }

  addEvento(email : string | null, nomEvento : string, area : string) {
    return this.http.post(`${this.URL}/participante/nvoEvento`, { email, nomEvento, area });
  }

  getGender(gen : string, evento : string) : Observable<Participante[]> {
    return this.http.post<Participante[]>(`${this.URL}/participante/genero`, {gen, evento});
  }

  getParticipantes(evento : string) : Observable<Participante[]> {
    return this.http.get<Participante[]>(`${this.URL}/participantes/evento/${evento}`);
  }
}
