import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Ubigeo } from '../Interfaces/ubigeo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private urlApi:String=apiServer.ServerUrl+"Ubigeo";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<Ubigeo[]>{
    return this.httpClient.get<Ubigeo[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:String):Observable<Ubigeo>{
    return  this.httpClient.get<Ubigeo>(`${this.urlApi}/${id}`);
  }
}
