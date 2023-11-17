import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalVariedadComponent } from '../../Modales/modal-variedad/modal-variedad.component';
import { Variedad } from 'src/app/Interfaces/variedad';
import { VariedadService } from 'src/app/Services/variedad.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-variedad',
    templateUrl: './variedad.component.html',
    styleUrls: ['./variedad.component.css'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule]
})
export class VariedadComponent implements OnInit, AfterViewInit{

  columnasTabla: string[] = ['idvariedad','descripcion','acciones'];
  dataInicio: Variedad[] = [];
  dataListaVariedad = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _variedadServicio: VariedadService,
    private _utilidadServicio: UtilidadService
  ) { }

  ngOnInit(): void {
  this.ObtenerVariedad();
  }
  ObtenerVariedad() {
    this._variedadServicio.ObtenerTodos().subscribe({
      next: (data) => {
        if (data)
          this.dataListaVariedad.data = data;
        else
          this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION")
      },
      error: (e) => { }
    })
  }
  ngAfterViewInit(): void {
    this.dataListaVariedad.paginator = this.paginacionTabla;
  }
  aplicarFiltroTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaVariedad.filter = filterValue.trim().toLocaleLowerCase();
  }
  nuevoVariedad() {
    this.dialog.open(ModalVariedadComponent, {
      disableClose: true
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerVariedad();
    })
  }
  editarVariedad(variedad : Variedad) {
    this.dialog.open(ModalVariedadComponent, {
      disableClose: true,
      data: variedad
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerVariedad();
    })
  }
  eliminarVariedad(variedad: Variedad) {

    Swal.fire({
      title: '¿Desea eliminar registro?',
      text: variedad.descripcion,
      icon: "warning",
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "No,volver"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._variedadServicio.Eliminar(variedad.idvariedad).subscribe({
          next: (data) => {
            if (data) {
              this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
              this.ObtenerVariedad();
            } else
              this._utilidadServicio.MostrarAlerta("Error al eliminar", "ERROR")
          },
          error: (e) => { }
        })
      }
    })
  }
}
