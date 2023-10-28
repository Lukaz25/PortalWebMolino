import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { Almacen } from 'src/app/Interfaces/almacen';
import { AlmacenService } from 'src/app/Services/almacen.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-almacen',
  templateUrl: './modal-almacen.component.html',
  styleUrls: ['./modal-almacen.component.css']
})
export class ModalAlmacenComponent implements OnInit {

  formularioAlmacen: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar"
  constructor(
    private modalActual: MatDialogRef<ModalAlmacenComponent>,
    @Inject(MAT_DIALOG_DATA) public datosAlmacen: Almacen,
    private fb: FormBuilder,
    private _AlmacenServicio: AlmacenService,
    private _utilidadServicio: UtilidadService

  ) {
    this.formularioAlmacen = this.fb.group({
      idalmacen:[''],
      descripcion: ['', Validators.required],
    });
if(this.datosAlmacen!=null){
  this.tituloAccion="Editar";
  this.botonAccion="Actualizar";
}
  }
  ngOnInit(): void {

    if(this.datosAlmacen!= null){
      this.formularioAlmacen.patchValue({
        idalmacen:this.datosAlmacen.idalmacen,
        descripcion:this.datosAlmacen.descripcion,
        estado:'0'
      })
    }
  }
  GuardarEditar_Almacen(){
    const _almacen :Almacen={
      idalmacen:this.datosAlmacen==null? 0: this.datosAlmacen.idalmacen,
      descripcion:this.formularioAlmacen.value.descripcion,
      estado : '0',
    }
    if(this.datosAlmacen==null){
      this._AlmacenServicio.Crear(_almacen).subscribe({
        next:(data)=>{
          if(data){
            this._utilidadServicio.MostrarAlerta("Se registro correctamente","EXITO");
            this.modalActual.close("True")
          }else
          this._utilidadServicio.MostrarAlerta("Error al registrar","ERROR");
        },error:(e)=>{}
      });
    }else{
      this._AlmacenServicio.Actualizar(_almacen).subscribe({
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
