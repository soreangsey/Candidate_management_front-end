import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { Offre } from '../../models/offre.model';
import { OffreResponse } from '../../models/offreResponse.model';

@Service()
export class OffreService {

  private httpClient = inject(HttpClient);

  private APIURL =  'http://localhost:3000/api/offre';

  Offres = signal<Offre[]>([]);

  getAll(): Observable<OffreResponse> {
    return this.httpClient.get<OffreResponse>(this.APIURL);
  }

  getById(id: number): Observable<Offre> {
    return this.httpClient.get<Offre>(`${this.APIURL}/${id}`);
  }

  create(Offre: Omit<Offre, 'id'>) {

    const maxId = Math.max(
      0,...this.Offres().map(Offre => Offre.id)
    );

    const newOffre: Offre = {
      id: maxId + 1,
      ...Offre
    };

    this.Offres.update(
      Offres => [...Offres, newOffre]
    );

  }
}