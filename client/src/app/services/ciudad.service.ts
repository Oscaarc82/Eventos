import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from './ciudad.model'

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private URL = 'http://localhost:3000/api'

  constructor (private http : HttpClient) { }

  getCiudades() : Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.URL}/ciudad`);
  }

  saveCiudad(ciudad : Ciudad) {
    return this.http.post(`${this.URL}/ciudad`, ciudad);
  }
}
