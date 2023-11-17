import { TipoPersona } from "./tipo-persona";

export interface Persona {
    idpersona: number,
    nombre: string,
    nro_doc_identidad: string,
    direccion: String,
    celular: string,
    observacion: string,
    estado: string,
    tipopersona: TipoPersona,
    personaDescripcion: string,
    f_create: Date
}
