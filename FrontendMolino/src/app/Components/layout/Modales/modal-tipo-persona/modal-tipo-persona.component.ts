import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { TipoPersona } from 'src/app/Interfaces/tipo-persona';
import { TipoPersonaService } from 'src/app/Services/tipo-persona.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-tipo-persona',
  templateUrl: './modal-tipo-persona.component.html',
  styleUrls: ['./modal-tipo-persona.component.css']
})
export class ModalTipoPersonaComponent implements OnInit {

  formularioTipoPersona: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar"
  constructor(
    private modalActual: MatDialogRef<ModalTipoPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public datosTipoPersona: TipoPersona,
    private fb: FormBuilder,
    private _TipoPersonaServicio: TipoPersonaService,
    private _utilidadServicio: UtilidadService

  ) {
    this.formularioTipoPersona = this.fb.group({
      idtipo_persona:[''],
      descripcion: ['', Validators.required],
    });
if(this.datosTipoPersona!=null){
  this.tituloAccion="Editar";
  this.botonAccion="Actualizar";
}
  }
  ngOnInit(): void {

    if(this.datosTipoPersona!= null){
      this.formularioTipoPersona.patchValue({
        idrol:this.datosTipoPersona.idtipo_persona,
        nombre:this.datosTipoPersona.descripcion
      })
    }
  }
  GuardarEditar_TipoPersona(){
    const _tipopersona :TipoPersona={
      idtipo_persona:this.datosTipoPersona==null? 0: this.datosTipoPersona.idtipo_persona,
      descripcion:this.formularioTipoPersona.value.descripcion,
      estado : '0',
    }
    if(this.datosTipoPersona==null){
      this._TipoPersonaServicio.Crear(_tipopersona).subscribe({
        next:(data)=>{
          if(data){
            this._utilidadServicio.MostrarAlerta("Se registro correctamente","EXITO");
            this.modalActual.close("True")
          }else
          this._utilidadServicio.MostrarAlerta("Error al registrar","ERROR");
        },error:(e)=>{}
      });
    }else{
      this._TipoPersonaServicio.Actualizar(_tipopersona).subscribe({
        next:(data)=>{
          if(data){
            this._utilidadServicio.MostrarAlerta("Se Edito correctamente","EXITO");
            this.modalActual.close("True")
          }else
          this._utilidadServicio.MostrarAlerta("Error al Editar","ERROR");
        },error:(e)=>{}
      });
    }
  }
}
