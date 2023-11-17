import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalTipoPersonaComponent } from '../../Modales/modal-tipo-persona/modal-tipo-persona.component';
import { TipoPersona } from 'src/app/Interfaces/tipo-persona';
import { TipoPersonaService } from 'src/app/Services/tipo-persona.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-tipo-persona',
    templateUrl: './tipo-persona.component.html',
    styleUrls: ['./tipo-persona.component.css'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule]
})
export class TipoPersonaComponent {
  columnasTabla: string[] = ['idtipo_persona','descripcion','acciones'];
  dataInicio: TipoPersona[] = [];
  dataListaTipoPersona = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _tipopersonaServicio: TipoPersonaService,
    private _utilidadServicio: UtilidadService
  ) { }

  ngOnInit(): void {
  this.ObtenerTipoPersona();
  }
  ObtenerTipoPersona() {
    this._tipopersonaServicio.ObtenerTodos().subscribe({
      next: (data) => {
        if (data)
          this.dataListaTipoPersona.data = data;
        else
          this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION")
      },
      error: (e) => { }
    })
  }
  ngAfterViewInit(): void {
    this.dataListaTipoPersona.paginator = this.paginacionTabla;
  }
  aplicarFiltroTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaTipoPersona.filter = filterValue.trim().toLocaleLowerCase();
  }
  nuevoTipoPersona() {
    this.dialog.open(ModalTipoPersonaComponent, {
      disableClose: true
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerTipoPersona();
    })
  }
  editarTipoPersona(tipopersona: TipoPersona) {
    this.dialog.open(ModalTipoPersonaComponent, {
      disableClose: true,
      data: tipopersona
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerTipoPersona();
    })
  }
  eliminarTipoPersona(tipopersona: TipoPersona) {

    Swal.fire({
      title: '¿Desea eliminar registro?',
      text: tipopersona.descripcion,
      icon: "warning",
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "No,volver"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._tipopersonaServicio.Eliminar(tipopersona.idtipo_persona).subscribe({
          next: (data) => {
            if (data) {
              this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
              this.ObtenerTipoPersona();
            } else
              this._utilidadServicio.MostrarAlerta("Error al eliminar", "ERROR")
          },
          error: (e) => { }
        })
      }
    })
  }
}
