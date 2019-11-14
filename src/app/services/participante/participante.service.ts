import { Participante } from '../../models/Participante';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  salvarParticipante(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>(this.url + '/participante', participante);
  }

  deletarParticipante(_id: string): Observable<Participante> {
    return this.http.delete<Participante>(this.url + '/participante/' + _id);
  }

  obterParticipante(id: string): Observable<Participante> {
    return this.http.get<Participante>(this.url + '/participante/' + id);
  }

  editarParticipante(participante: Participante): Observable<Participante> {
    return this.http.put<Participante>(this.url + '/participante/' + participante._id, participante);
  }

  listarParticipante() : Observable<Participante>{
    return this.http.get<Participante>(this.url + '/participante');
  }
}
