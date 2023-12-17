import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IngresoCascara } from '../Interfaces/ingreso-cascara';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoCascaraService {
  private urlApi:String=apiServer.ServerUrl+"IngresoCascara";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<IngresoCascara[]>{
    return this.httpClient.get<IngresoCascara[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:number):Observable<IngresoCascara>{
    return  this.httpClient.get<IngresoCascara>(`${this.urlApi}/${id}`);
  }
  public Crear(request:IngresoCascara):Observable<Object>{
    return this.httpClient.post(`${this.urlApi}`,request);
  }
  public Actualizar(request:IngresoCascara):Observable<Object>{
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
