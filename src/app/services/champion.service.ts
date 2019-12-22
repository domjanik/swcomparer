import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceListDTO} from '../state/app/models/ResourceListDTO';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(protected http: HttpClient) {
  }

  public getChampionList(pageNr): Observable<ResourceListDTO> {
    return this.http.get<ResourceListDTO>(`https://swapi.co/api/people/?page=${pageNr}`);
  }
}
