import { Injectable } from '@angular/core';
import { Cake } from 'src/app/models/Cake';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  
  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  saveCake(participante: Cake): Observable<Cake> {
    return this.http.post<Cake>(this.url + '/cake', participante);
  }

  deleteCake(_id: string): Observable<Cake> {
    return this.http.delete<Cake>(this.url + '/cake/' + _id);
  }

  findCake(id: string): Observable<Cake> {
    return this.http.get<Cake>(this.url + '/cake/' + id);
  }

  editCake(participante: Cake): Observable<Cake> {
    return this.http.put<Cake>(this.url + '/cake/' + participante._id, participante);
  }

  listCake() : Observable<Cake>{
    return this.http.get<Cake>(this.url + '/cake');
  }
}
