import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalRolusuarioComponent } from '../../Modales/modal-rolusuario/modal-rolusuario.component';
import { Rolusuario } from 'src/app/Interfaces/rolusuario';
import { RolusuarioService } from 'src/app/Services/rolusuario.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-rolusuario',
  templateUrl: './rolusuario.component.html',
  styleUrls: ['./rolusuario.component.css']
})
export class RolusuarioComponent implements OnInit, AfterViewInit {

  columnasTabla: string[] = ['idrol','nombre','acciones'];
  dataInicio: Rolusuario[] = [];
  dataListaRolusuario = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _rolusuarioServicio: RolusuarioService,
    private _utilidadServicio: UtilidadService
  ) { }

  ngOnInit(): void {
  this.ObtenerRolusuario();
  }
  ObtenerRolusuario() {
    this._rolusuarioServicio.ObtenerTodos().subscribe({
      next: (data) => {
        if (data)
          this.dataListaRolusuario.data = data;
        else
          this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION")
      },
      error: (e) => { }
    })
  }
  ngAfterViewInit(): void {
    this.dataListaRolusuario.paginator = this.paginacionTabla;
  }
  aplicarFiltroTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaRolusuario.filter = filterValue.trim().toLocaleLowerCase();
  }
  nuevoRolusuario() {
    this.dialog.open(ModalRolusuarioComponent, {
      disableClose: true
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerRolusuario();
    })
  }
  editarRolusuario(rolusuario: Rolusuario) {
    this.dialog.open(ModalRolusuarioComponent, {
      disableClose: true,
      data: rolusuario
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerRolusuario();
    })
  }
  eliminarRolusuario(rolusuario: Rolusuario) {

    Swal.fire({
      title: '¿Desea eliminar registro?',
      text: rolusuario.nombre,
      icon: "warning",
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "No,volver"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._rolusuarioServicio.Eliminar(rolusuario.idrol).subscribe({
          next: (data) => {
            if (data) {
              this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
              this.ObtenerRolusuario();
            } else
              this._utilidadServicio.MostrarAlerta("Error al eliminar", "ERROR")
          },
          error: (e) => { }
        })
      }
    })
  }
}
