import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { duration } from 'moment';
import { Login } from 'src/app/Interfaces/login';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _usuarioServicio: UsuarioService,
    private _utilidadServicio: UtilidadService,

  ) {
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  iniciarSesion() {
    this.mostrarLoading = true;
    const request: Login = {
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    }
    this._usuarioServicio.iniciarSesion(request).subscribe({
      next: (data) => {
        if (data) {
          this._utilidadServicio.GuardarSesionUsuario(data);
          this.router.navigate(["pages"])
        } else
          this._utilidadServicio.MostrarAlerta("Usuario No Existe", "VERIFICAR")
      },
      complete: () => {
        this.mostrarLoading = false;
      },
      error: () => {
        this._utilidadServicio.MostrarAlerta("Hubo un error", "ERROR")
      }
    })

  }
}
