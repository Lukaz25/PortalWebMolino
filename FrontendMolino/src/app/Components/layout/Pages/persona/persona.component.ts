import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Persona } from 'src/app/Interfaces/persona';
import { PersonaService } from 'src/app/Services/persona.service';
import { ModalPersonaComponent } from '../../Modales/modal-persona/modal-persona.component';

@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html',
    styleUrls: ['./persona.component.css'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule,
        MatIconModule, MatDividerModule,
        MatFormFieldModule, MatInputModule,
        MatTableModule, MatPaginatorModule,FlexLayoutModule]
})
export class PersonaComponent implements OnInit, AfterViewInit {

    columnasTabla: string[] = ['idpersona','nombre','nro_doc_identidad','personaDescripcion','celular','direccion', 'acciones'];
    dataInicio: Persona[] = [];
    dataListaPersona= new MatTableDataSource(this.dataInicio);
    @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
    constructor(
      private dialog: MatDialog,
      private _personaServicio: PersonaService,
      private _utilidadServicio: UtilidadService
    ) { }
  
    ngOnInit(): void {
      this.ObtenerPersona();
    }
    ObtenerPersona() {
      this._personaServicio.ObtenerTodos().subscribe({
        next: (data) => {
          if (data)
            this.dataListaPersona.data = data;
  
          else
            this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION");
        },
        error: (e) => { }
      });
    }
    ngAfterViewInit(): void {
      this.dataListaPersona.paginator = this.paginacionTabla;
    }
    aplicarFiltroTabla(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataListaPersona.filter = filterValue.trim().toLocaleLowerCase();
    }
    nuevoPersona() {
      this.dialog.open(ModalPersonaComponent, {
        disableClose: true
      }).afterClosed().subscribe(resultado => {
        if (resultado == "True") this.ObtenerPersona();
      });
    }
    editarPersona(persona: Persona) {
      this.dialog.open(ModalPersonaComponent, {
        disableClose: true,
        data: persona
      }).afterClosed().subscribe(resultado => {
        if (resultado == "True") this.ObtenerPersona();
      });
    }
    eliminarPersona(persona: Persona) {
  
      Swal.fire({
        title: '¿Desea eliminar registro?',
        text: persona.nombre,
        icon: "warning",
        confirmButtonColor: '#3085d6',
        confirmButtonText: "Si, eliminar",
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: "No,volver"
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          this._personaServicio.Eliminar(persona.idpersona).subscribe({
            next: (data) => {
              if (data) {
                this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
                this.ObtenerPersona();
              }
              else
                this._utilidadServicio.MostrarAlerta("Error al eliminar", "ERROR");
            },
            error: (e) => { }
          });
        }
      });
    }
}
