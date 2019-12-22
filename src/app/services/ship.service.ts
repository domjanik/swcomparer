import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceListDTO} from '../state/app/models/ResourceListDTO';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(protected http: HttpClient) {
  }

  public getShipList(pageNr): Observable<ResourceListDTO> {
    return this.http.get<ResourceListDTO>(`https://swapi.co/api/starships/?page=${pageNr}`);
  }
}
