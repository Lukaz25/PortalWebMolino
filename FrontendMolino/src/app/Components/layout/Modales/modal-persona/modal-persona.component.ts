import { Component, OnInit, Inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/Interfaces/persona';
import { TipoPersonaService } from 'src/app/Services/tipo-persona.service';
import { TipoDocIdentidadService } from 'src/app/Services/tipo-doc-identidad.service';
import { TipoPersona } from 'src/app/Interfaces/tipo-persona';
import { TipoDocIdentidad } from 'src/app/Interfaces/tipo-doc-identidad';
import { max } from 'moment';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-modal-persona',
    templateUrl: './modal-persona.component.html',
    styleUrls: ['./modal-persona.component.css'],
    standalone: true,
    imports: [MatDialogTitle,MatTooltipModule,MatIconModule,MatSelectModule,FlexLayoutModule,MatDividerModule, MatDialogContent, ReactiveFormsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatDialogActions, MatButtonModule, MatDialogClose]
})
export class ModalPersonaComponent  implements OnInit {

    formularioPersona: FormGroup;
    tituloAccion: string = "Agregar";
    botonAccion: string = "Guardar"
    listaTipPer : TipoPersona[]=[];
    listaTipDoc : TipoDocIdentidad[]=[];
    disabled: boolean = true;

   
    
    constructor(
      private modalActual: MatDialogRef<ModalPersonaComponent>,
      @Inject(MAT_DIALOG_DATA) public datosPersona: Persona,
      private fb: FormBuilder,
      private _PersonaServicio: PersonaService,
      private _TipopersonaServicio : TipoPersonaService,
      private _TipodocidentServicio : TipoDocIdentidadService,
      private _utilidadServicio: UtilidadService
  
    ) {
      this.formularioPersona = this.fb.group({
        idpersona:[''],
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
  this.ListaTipoPersona();
  this.ListaTipoDocIdent();
    }
    ngOnInit(): void {
      if(this.datosPersona!= null){
        this.formularioPersona.patchValue({
          idpersona:this.datosPersona.idpersona,
          nombre:this.datosPersona.nombre,
          estado:this.datosPersona.estado
        })
      }
    }
    ListaTipoPersona(){
      this._TipopersonaServicio.ObtenerTodos().subscribe({
        next: (data) => {
          if (data){
            this.listaTipPer = data;
            if (this.datosPersona)
            this.formularioPersona.patchValue({
              idtipo_persona: this.datosPersona.tipopersona.idtipo_persona
            })
        }
      },
        error: (e) => { },
      complete: () => {}}) }
      ListaTipoDocIdent(){
        this._TipodocidentServicio.ObtenerTodos().subscribe({
          next: (data) => {
            if (data){
              this.listaTipDoc = data;
              if (this.datosPersona)
              this.formularioPersona.patchValue({
                idtipo_doc_identidad: this.datosPersona.tipodocident.idtipo_doc_identidad
              })
          }
        },
          error: (e) => { },
        complete: () => {}}) }
    busca_documento_api(){

    }    
    GuardarEditar_Almacen(){  
    }
}
