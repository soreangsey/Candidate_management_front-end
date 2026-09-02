import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateOffre, Offre, OffreResponse } from '../../models/offre.model';

@Injectable({ providedIn: 'root' })
export class OffreService {

  private httpClient = inject(HttpClient);
  private APIURL = 'http://localhost:3000/api/offre';

  getAll(): Observable<OffreResponse> {
    return this.httpClient.get<OffreResponse>(this.APIURL);
  }

  getById(id: number): Observable<Offre> {
    return this.httpClient.get<Offre>(`${this.APIURL}/${id}`);
  }

  addOffre(offre: CreateOffre): Observable<Offre> {
    return this.httpClient.post<Offre>(this.APIURL, offre);
  }
}