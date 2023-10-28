import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { TipoPersona } from '../Interfaces/tipo-persona';
@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  private urlApi:string="http://localhost:9090/api/Tipo_persona";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<TipoPersona[]>{
    return this.httpClient.get<TipoPersona[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<TipoPersona>{
    return  this.httpClient.get<TipoPersona>(`${this.urlApi}?id=${id}`);
  }
  public Crear(request:TipoPersona):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:TipoPersona):Observable<Object>{
    return this.httpClient.put(`${this.urlApi}`,request);
  }
  public Eliminar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}?id=${id}`);
  }
}
