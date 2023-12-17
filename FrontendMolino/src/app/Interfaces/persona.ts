import { TipoDocIdentidad } from "./tipo-doc-identidad";
import { TipoPersona } from "./tipo-persona";
import { Ubigeo } from "./ubigeo";

export interface Persona {
    idpersona: number,
    nombre: string,
    nro_doc_identidad: string,
    direccion: String,
    celular: string,
    observacion: string,
    estado: string,
    tipopersona: TipoPersona,
    tipodocident:TipoDocIdentidad,
    ubigeo:Ubigeo
}
