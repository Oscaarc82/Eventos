import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante } from './participante.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private URL = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }

  findSession(correo : string) : Observable<Participante[]>{
    return this.http.get<Participante[]>(`${this.URL}/login/${correo}`)
  }
}
