import { Participant } from '../../models/Participant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  saveParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.url + '/participant', participant);
  }

  deleteParticipant(_id: string): Observable<Participant> {
    return this.http.delete<Participant>(this.url + '/participant/' + _id);
  }

  findParticipant(id: string): Observable<Participant> {
    return this.http.get<Participant>(this.url + '/participant/' + id);
  }

  editParticipant(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(this.url + '/participant/' + participant._id, participant);
  }

  listParticipant() : Observable<Participant>{
    return this.http.get<Participant>(this.url + '/participant');
  }
}
