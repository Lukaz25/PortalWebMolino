import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Variedad } from 'src/app/Interfaces/variedad';
import { Almacen } from 'src/app/Interfaces/almacen';
import { IngresoCascara } from 'src/app/Interfaces/ingreso-cascara';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngresoCascaraService } from 'src/app/Services/ingreso-cascara.service';
import { VariedadService } from 'src/app/Services/variedad.service';
import { AlmacenService } from 'src/app/Services/almacen.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-ingreso-cascara',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-ingreso-cascara.component.html',
  styleUrl: './modal-ingreso-cascara.component.css'
})
export class ModalIngresoCascaraComponent implements OnInit {
  formularioPersona: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar"
  listaVariedad : Variedad[]=[];
  listaAlmacen : Almacen[]=[];
  disabled: boolean = true;

  constructor(
   
    private fb: FormBuilder,
    private _IngresocascaraServicio: IngresoCascaraService,
    private _VariedadServicio : VariedadService,
    private _AlmacenServicio : AlmacenService,
    private _utilidadServicio: UtilidadService

  ) {
    this.formularioIngresocascara = this.fb.group({
      idingreso:[''],
      nombre: ['', Validators.required],
      nro_doc_identidad: ['',Validators.maxLength(11)],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      observacion: [''],
    });

if(this.datosPersona!=null){
  this.tituloAccion="Editar";
  this.botonAccion="Actualizar";
}
}
