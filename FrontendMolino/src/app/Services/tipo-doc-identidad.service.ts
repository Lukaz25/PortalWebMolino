import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { TipoDocIdentidad } from '../Interfaces/tipo-doc-identidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocIdentidadService {
  private urlApi:String=apiServer.ServerUrl+"Tipo_doc_identidad";
  constructor(private httpClient: HttpClient) { }

  public ObtenerTodos():Observable<TipoDocIdentidad[]>{
    return this.httpClient.get<TipoDocIdentidad[]>(`${this.urlApi}`);
  }
  public ObtenerporId(id:String):Observable<TipoDocIdentidad>{
    return  this.httpClient.get<TipoDocIdentidad>(`${this.urlApi}/${id}`);
  }
}
