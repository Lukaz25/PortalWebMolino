import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { TipoPersona } from '../Interfaces/tipo-persona';
import { apiServer } from '../apiServer';
@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  private urlApi:String=apiServer.ServerUrl+"Tipo_persona";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<TipoPersona[]>{
    return this.httpClient.get<TipoPersona[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<TipoPersona>{
    return  this.httpClient.get<TipoPersona>(`${this.urlApi}/${id}`);
  }
  public Crear(request:TipoPersona):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:TipoPersona):Observable<Object>{
    return this.httpClient.put(`${this.urlApi}`,request);
  }
  public Eliminar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
