import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { RolusuarioComponent } from './Pages/rolusuario/rolusuario.component';
import { TipoPersonaComponent } from './Pages/tipo-persona/tipo-persona.component';
import { SharedModule } from 'src/app/Reutilizable/Shared/shared.module';
import { ModalRolusuarioComponent } from './Modales/modal-rolusuario/modal-rolusuario.component';
import { ModalUsuarioComponent } from './Modales/modal-usuario/modal-usuario.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ModalTipoPersonaComponent } from './Modales/modal-tipo-persona/modal-tipo-persona.component';
import { ModalAlmacenComponent } from './Modales/modal-almacen/modal-almacen.component';
import { ModalVariedadComponent } from './Modales/modal-variedad/modal-variedad.component';
import { AlmacenComponent } from './Pages/almacen/almacen.component';
import { VariedadComponent } from './Pages/variedad/variedad.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RolusuarioComponent,
    TipoPersonaComponent,
    UsuarioComponent,
    ModalRolusuarioComponent,
    ModalUsuarioComponent,
    ModalTipoPersonaComponent,
    ModalAlmacenComponent,
    ModalVariedadComponent,
    AlmacenComponent,
    VariedadComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
