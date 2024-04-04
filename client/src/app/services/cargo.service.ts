import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from './cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private URL = 'http://localhost:3000/api'
  
  constructor(private http : HttpClient) { }

  getCargos() : Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.URL}/cargo`);
  }
}
