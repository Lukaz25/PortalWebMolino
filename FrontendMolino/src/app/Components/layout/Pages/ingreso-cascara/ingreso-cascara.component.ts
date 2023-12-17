import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IngresoCascara } from 'src/app/Interfaces/ingreso-cascara';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { MatDialog } from '@angular/material/dialog';
import { IngresoCascaraService } from 'src/app/Services/ingreso-cascara.service';
import { ModalIngresoCascaraComponent } from '../../Modales/modal-ingreso-cascara/modal-ingreso-cascara.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-cascara',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule,
    MatIconModule, MatDividerModule,
    MatFormFieldModule, MatInputModule,
    MatTableModule, MatPaginatorModule,FlexLayoutModule],
  templateUrl: './ingreso-cascara.component.html',
  styleUrl: './ingreso-cascara.component.css'
})
export class IngresoCascaraComponent implements OnInit, AfterViewInit {

  columnasTabla: string[] = ['idingreso','nro_doc','fecha_ing','nombre','almacen','num_sac_ing','pes_neto','humedad','placa','acciones'];
  dataInicio: IngresoCascara[] = [];
  dataListaIngreso= new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _ingresocascaraServicio: IngresoCascaraService,
    private _utilidadServicio: UtilidadService
  ) { }

  ngOnInit(): void {
    this.ObtenerIngresoCascara();
  }
  ObtenerIngresoCascara() {
    this._ingresocascaraServicio.ObtenerTodos().subscribe({
      next: (data) => {
        if (data)
          this.dataListaIngreso.data = data;

        else
          this._utilidadServicio.MostrarAlerta("No se encontraron datos", "INFORMACION");
      },
      error: (e) => { }
    });
  }
  ngAfterViewInit(): void {
    this.dataListaIngreso.paginator = this.paginacionTabla;
  }
  aplicarFiltroTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaIngreso.filter = filterValue.trim().toLocaleLowerCase();
  }
  nuevoIngresoCascara() {
    this.dialog.open(ModalIngresoCascaraComponent, {
      disableClose: true
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerIngresoCascara();
    });
  }
  editarIngresoCascara(ingresoCascara: IngresoCascara) {
    this.dialog.open(ModalIngresoCascaraComponent, {
      disableClose: true,
      data: ingresoCascara
    }).afterClosed().subscribe(resultado => {
      if (resultado == "True") this.ObtenerIngresoCascara();
    });
  }
  eliminarIngresoCascara(ingresoCascara: IngresoCascara) {

    Swal.fire({
      title: '¿Desea eliminar registro?',
      text: ingresoCascara.nro_doc,
      icon: "warning",
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "No,volver"
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._ingresocascaraServicio.Eliminar(ingresoCascara.idingreso).subscribe({
          next: (data) => {
            if (data) {
              this._utilidadServicio.MostrarAlerta("Se elimino correctamente", "LISTO");
              this.ObtenerIngresoCascara();
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
