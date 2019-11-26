
import { Raffle } from '../../models/Raffle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {

  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  saveRaffle(raffle: Raffle): Observable<Raffle> {
    return this.http.post<Raffle>(this.url + '/raffle', raffle);
  }

  listRaffle() {
    return this.http.get<Raffle>(this.url + '/raffle');
  }

  deleteRaffle(id: string) : Observable<Raffle> {
    return this.http.delete<Raffle>(this.url + '/raffle/' + id);
  }
}
