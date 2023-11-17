import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { Variedad } from 'src/app/Interfaces/variedad';
import { VariedadService } from 'src/app/Services/variedad.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-modal-variedad',
    templateUrl: './modal-variedad.component.html',
    styleUrls: ['./modal-variedad.component.css'],
    standalone: true,
    imports: [MatDialogTitle, MatDividerModule, MatDialogContent, ReactiveFormsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatDialogActions, MatButtonModule, MatDialogClose]
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
