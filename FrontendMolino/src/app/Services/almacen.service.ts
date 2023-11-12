import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Almacen } from '../Interfaces/almacen';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private urlApi:string="http://localhost:9090/api/Almacen";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<Almacen[]>{
    return this.httpClient.get<Almacen[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<Almacen>{
    return  this.httpClient.get<Almacen>(`${this.urlApi}/${id}`);
  }
  public Crear(request:Almacen):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:Almacen):Observable<Object>{
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
