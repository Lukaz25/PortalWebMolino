import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Variedad } from 'src/app/Interfaces/variedad';
import { Almacen } from 'src/app/Interfaces/almacen';
import { IngresoCascara } from 'src/app/Interfaces/ingreso-cascara';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class ModalIngresoCascaraComponent {
  

}
