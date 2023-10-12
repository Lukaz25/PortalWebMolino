import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { Login } from '../Interfaces/login';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi:string="http://localhost:9090/api/Usuario";
  constructor(private httpClient: HttpClient) { }
 
  public iniciarSesion(request:Login):Observable<any>{
    return this.httpClient.post(`${this.urlApi}/iniciarSesion`,request); 
  }
  public ObtenerTodos():Observable<any>{
    return this.httpClient.get(this.urlApi);
  }
  public ObtenerporId(id:number):Observable<any>{
    return this.httpClient.get(`${this.urlApi}?id=${id}`);
  }
  public Crear(request:Usuario):Observable<any>{
    return this.httpClient.post(this.urlApi,request);
  }
  public Actualizar(request:Usuario):Observable<any>{
    return this.httpClient.put(this.urlApi,request);
  }
  public Eliminar(id:number):Observable<any>{
    return this.httpClient.delete(`${this.urlApi}?id=${id}`);
  }
}
