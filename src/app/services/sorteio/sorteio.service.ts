
import { Sorteio } from './../../models/Sorteio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  salvarSorteio(sorteio: Sorteio): Observable<Sorteio> {
    return this.http.post<Sorteio>(this.url + '/sorteio', sorteio);
  }

  listarSorteio() {
    return this.http.get<Sorteio>(this.url + '/sorteio');
  }
}
