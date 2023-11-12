import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { Variedad } from '../Interfaces/variedad';

@Injectable({
  providedIn: 'root'
})
export class VariedadService {
  private urlApi:string="http://localhost:9090/api/Variedad";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<Variedad[]>{
    return this.httpClient.get<Variedad[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<Variedad>{
    return  this.httpClient.get<Variedad>(`${this.urlApi}/${id}`);
  }
  public Crear(request:Variedad):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:Variedad):Observable<Object>{
    return this.httpClient.put(`${this.urlApi}`,request);
  }
  public Eliminar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
