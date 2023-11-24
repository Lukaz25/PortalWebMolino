import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlmacenComponent } from '../../Modales/modal-almacen/modal-almacen.component';
import { Almacen } from 'src/app/Interfaces/almacen';
import { AlmacenService } from 'src/app/Services/almacen.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";



@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,
    MatIconModule, MatDividerModule,
    MatFormFieldModule, MatInputModule,
    MatTableModule, MatPaginatorModule,FlexLayoutModule]
})
export class AlmacenComponent implements OnInit, AfterViewInit {

  columnasTabla: string[] = ['idalmacen', 'descripcion', 'acciones'];
  dataInicio: Almacen[] = [];
  dataListaAlmacen = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _almacenServicio: AlmacenService,
    private _utilidadServicio: UtilidadService
  ) { }

  ngOnInit(): void {
    this.ObtenerAlmacen();
  }
  ObtenerAlmacen() {
    this._almacenServicio.ObtenerTodos().subscribe({
      next: (data) => {
        if (data)
          this.dataListaAlmacen.data = data;

        else
          this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION");
      },
      error: (e) => { }
    });
  }
  ngAfterViewInit(): void {
    this.dataListaAlmacen.paginator = this.paginacionTabla;
  }
  aplicarFiltroTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaAlmacen.filter = filterValue.trim().toLocaleLowerCase();
  }
  nuevoAlmacen() {
    this.dialog.open(ModalAlmacenComponent, {
      disableClose: true
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerAlmacen();
    });
  }
  editarAlmacen(almacen: Almacen) {
    this.dialog.open(ModalAlmacenComponent, {
      disableClose: true,
      data: almacen
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerAlmacen();
    });
  }
  eliminarAlmacen(almacen: Almacen) {

    Swal.fire({
      title: '¿Desea eliminar registro?',
      text: almacen.descripcion,
      icon: "warning",
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "No,volver"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._almacenServicio.Eliminar(almacen.idalmacen).subscribe({
          next: (data) => {
            if (data) {
              this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
              this.ObtenerAlmacen();
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
