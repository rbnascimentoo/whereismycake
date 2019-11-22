
import { Sortition } from '../../models/Sortition';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortitionService {

  url = 'http://localhost:3000/api/whereismycake';

  constructor(private http: HttpClient) { }

  saveSortition(sortition: Sortition): Observable<Sortition> {
    return this.http.post<Sortition>(this.url + '/sortition', sortition);
  }

  listSortition() {
    return this.http.get<Sortition>(this.url + '/sortition');
  }

  deleteSortiton(id: string) : Observable<Sortition> {
    return this.http.delete<Sortition>(this.url + '/sortition/' + id);
  }
}
