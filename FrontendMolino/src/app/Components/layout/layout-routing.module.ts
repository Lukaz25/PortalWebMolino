import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { RolusuarioComponent } from './Pages/rolusuario/rolusuario.component';
import { TipoPersonaComponent } from './Pages/tipo-persona/tipo-persona.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { AlmacenComponent } from './Pages/almacen/almacen.component';
import { VariedadComponent } from './Pages/variedad/variedad.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'rolusuario',component:RolusuarioComponent},
    {path:'tipo_persona',component:TipoPersonaComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'almacen',component:AlmacenComponent},
    {path:'variedad',component:VariedadComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
