import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";

import { NavItem } from 'src/app/Interfaces/nav-item';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [FlexLayoutModule,MatExpansionModule,MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule, MatListModule, RouterLink, RouterOutlet]
})
export class LayoutComponent implements OnInit {
  nombreUsuario:string='';
  rolUsuario:string='';
  menu: NavItem [] = [
    {
      displayName: 'DashBoard',
      iconName: 'home',
      route: '/pages/dashboard',
    },        
    {
      displayName: 'Mantenimiento',
      iconName: 'list',          
      children: [
        {
          displayName: 'Almacenes',
          iconName: 'add_business',
          route: '/pages/almacen'
        },
        { 
          displayName: 'Variedades',
          iconName: 'compost',
          route: '/pages/variedad'
        },
        { 
          displayName: 'Tipo Personas',
          iconName: 'groups',
          route: '/pages/tipo_persona'
        },
        { 
          displayName: 'Personas',
          iconName: 'group_add',
          route: '/pages/persona'
        }
      ]
    },{
      displayName: 'Procesos',
      iconName: 'account_tree',          
      children: [
        {
          displayName: 'Ingreso Cascara',
          iconName: 'local_shipping',
          route: '/pages/ingresocascara'
        },
        { 
          displayName: 'Secado',
          iconName: 'sunny',
          route: '/pages/persona'
        },
        { 
          displayName: 'Pilado',
          iconName: 'move_down',
          route: '/pages/persona'
        }
      ]
    },
    {
      displayName: 'Reportes',
      iconName: 'receipt_long',          
      children: [
        {
          displayName: 'Ingreso Cascara',
          iconName: 'ballot',
          route: '/pages/rolusuario'
        },
      ]
    },
    {
      displayName: 'Administración',
      iconName: 'manage_accounts',          
      children: [
        {
          displayName: 'Roles',
          iconName: 'admin_panel_settings',
          route: '/pages/rolusuario'
        },
        { 
          displayName: 'Usuarios',
          iconName: 'perm_contact_calendar',
          route: '/pages/usuario'
        }
      ]
    }
  ];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private router:Router,
    private _utilidadServicio:UtilidadService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    const usuario = this._utilidadServicio.ObtenerSesionUsuario();
    if(usuario!=null){
      this.nombreUsuario=usuario.username;
      this.rolUsuario=usuario.rolNombre;
    }
  }

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}
CerrarSesion(){
this._utilidadServicio.EliminarSesionUsuario();
this.router.navigate(['login']);
}

}

