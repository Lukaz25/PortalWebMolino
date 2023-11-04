import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { Variedad } from 'src/app/Interfaces/variedad';
import { VariedadService } from 'src/app/Services/variedad.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-variedad',
  templateUrl: './modal-variedad.component.html',
  styleUrls: ['./modal-variedad.component.css']
})
export class ModalVariedadComponent implements OnInit {

  formularioVariedad: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar"
  constructor(
    private modalActual: MatDialogRef<ModalVariedadComponent>,
    @Inject(MAT_DIALOG_DATA) public datosVariedad: Variedad,
    private fb: FormBuilder,
    private _VariedadServicio: VariedadService,
    private _utilidadServicio: UtilidadService

  ) {
    this.formularioVariedad = this.fb.group({
      idvariedad:[''],
      descripcion: ['', Validators.required],
    });
if(this.datosVariedad!=null){
  this.tituloAccion="Editar";
  this.botonAccion="Actualizar";
}
  }
  ngOnInit(): void {

    if(this.datosVariedad!= null){
      this.formularioVariedad.patchValue({
        idvariedad:this.datosVariedad.idvariedad,
        descripcion:this.datosVariedad.descripcion,
        estado:'0'
      })
    }
  }
  GuardarEditar_Variedad(){
    const _variedad :Variedad={
      idvariedad:this.datosVariedad==null? 0: this.datosVariedad.idvariedad,
      descripcion:this.formularioVariedad.value.descripcion,
      estado : '0',
    }
    if(this.datosVariedad==null){
      this._VariedadServicio.Crear(_variedad).subscribe({
        next:(data)=>{
          if(data){
            this._utilidadServicio.MostrarAlerta("Se registro correctamente","EXITO");
            this.modalActual.close("True")
          }else
          this._utilidadServicio.MostrarAlerta("Error al registrar","ERROR");
        },error:(e)=>{}
      });
    }else{
      this._VariedadServicio.Actualizar(_variedad).subscribe({
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
