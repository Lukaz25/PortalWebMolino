import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { Rolusuario } from '../Interfaces/rolusuario';
@Injectable({
  providedIn: 'root'
})
export class RolusuarioService {
private urlApi:string="http://localhost:9090/api/Rolusuario";
  constructor(private httpClient: HttpClient) { }

  
  public ObtenerTodos():Observable<Rolusuario[]>{
    return this.httpClient.get<Rolusuario[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<Rolusuario>{
    return  this.httpClient.get<Rolusuario>(`${this.urlApi}/${id}`);
  }
  public Crear(request:Rolusuario):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:Rolusuario):Observable<Object>{
    return this.httpClient.put(`${this.urlApi}`,request);
  }
  public Eliminar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
