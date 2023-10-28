import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Rolusuario } from 'src/app/Interfaces/rolusuario';
import { RolusuarioService } from 'src/app/Services/rolusuario.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
@Component({
  selector: 'app-modal-rolusuario',
  templateUrl: './modal-rolusuario.component.html',
  styleUrls: ['./modal-rolusuario.component.css']
})
export class ModalRolusuarioComponent implements OnInit {

  formularioRolusuario: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar"
  constructor(
    private modalActual: MatDialogRef<ModalRolusuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public datosRolusuario: Rolusuario,
    private fb: FormBuilder,
    private _RolusuarioServicio: RolusuarioService,
    private _utilidadServicio: UtilidadService

  ) {
    this.formularioRolusuario = this.fb.group({
      idrol:[''],
      nombre: ['', Validators.required],
    });
if(this.datosRolusuario!=null){
  this.tituloAccion="Editar";
  this.botonAccion="Actualizar";
}
  }
  ngOnInit(): void {

    if(this.datosRolusuario!= null){
      this.formularioRolusuario.patchValue({
        idrol:this.datosRolusuario.idrol,
        nombre:this.datosRolusuario.nombre
      })
    }
  }
  GuardarEditar_Rolusuario(){
    const _rolusuario:Rolusuario={
      idrol:this.datosRolusuario==null? 0: this.datosRolusuario.idrol,
      nombre:this.formularioRolusuario.value.nombre,
    }
    if(this.datosRolusuario==null){
      this._RolusuarioServicio.Crear(_rolusuario).subscribe({
        next:(data)=>{
          if(data){
            this._utilidadServicio.MostrarAlerta("Se registro correctamente","EXITO");
            this.modalActual.close("True")
          }else
          this._utilidadServicio.MostrarAlerta("Error al registrar","ERROR");
        },error:(e)=>{}
      });
    }else{
      this._RolusuarioServicio.Actualizar(_rolusuario).subscribe({
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
