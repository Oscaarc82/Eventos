import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento.model'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private URL = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }

  getEvento() : Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.URL}/evento`)
  }

  saveEvento(evento : Evento) {
    return this.http.post(`${this.URL}/evento`, evento);
  }

  getEventoArea(area : String) : Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.URL}/evento/area/${area}`)
  }

  deleteEvento(_id: string): Observable<any> {
    return this.http.delete(`${this.URL}/evento/${_id}`);
  }

  editarEvento(id: string, evento: Evento): Observable<any> {
    return this.http.put(`${this.URL}/evento/${id}`, evento);
  }

  getEventoById(id: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.URL}/evento/${id}`); 
  }

  updateEvento(evento: Evento): Observable<any> {
    return this.http.put(`${this.URL}/evento/${evento._id}`, evento); 
  }

  getArea(evento : string) : Observable<Evento> {
    return this.http.get<Evento>(`${this.URL}/evento/nomEvento/${evento}`);
  }
}
