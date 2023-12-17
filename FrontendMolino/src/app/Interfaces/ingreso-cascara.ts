import { Almacen } from "./almacen";
import { Variedad } from "./variedad";

export interface IngresoCascara {
    idingreso: number,
    idpersona: number,
    idpersona_envase:number,
    idtransportista : number,
    idcuadrilla : number,
    fecha_ing: Date,
    transportista: String,
    placa: string,
    humedad : number,
    num_sac_ing : number,
    peso_bru : number,
    hora_ing : string,
    peso_tara : number,
    hora_sal : string,
    pes_neto : number,
    nro_doc :string,
    observacion: string,
    estado: string,
    variedad: Variedad,
    almacen:Almacen
}
