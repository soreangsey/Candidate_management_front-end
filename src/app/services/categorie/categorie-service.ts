import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategorieResponse } from '../../models/categorie.model';

@Injectable({ providedIn: 'root' })
export class CategorieService {

  private httpClient = inject(HttpClient);
  private APIURL = 'http://localhost:3000/api/categorie';

  getAll(): Observable<CategorieResponse> {
    return this.httpClient.get<CategorieResponse>(this.APIURL);
  }
}