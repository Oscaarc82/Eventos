import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from './area.model';

@Injectable({
  providedIn: 'root'
})

export class AreaService {
  private URL = 'http://localhost:3000/api'

  constructor (private http : HttpClient) { }

  getAreas() : Observable<Area[]> {
    return this.http.get<Area[]>(`${this.URL}/areas`);
  }
}
