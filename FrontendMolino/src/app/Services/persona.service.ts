import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Interfaces/persona';
import { Observable } from 'rxjs';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlApi:String=apiServer.ServerUrl+"Persona";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<Persona>{
    return  this.httpClient.get<Persona>(`${this.urlApi}/${id}`);
  }
  public Crear(request:Persona):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:Persona):Observable<Object>{
    return this.httpClient.put(`${this.urlApi}`,request);
  }
  public Eliminar(id:number):Observable<Object>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('method','DELETE');

    let options={
      headers:httpheaders
    };
    return this.httpClient.delete(`${this.urlApi}/${id}`,options);
  }
}
