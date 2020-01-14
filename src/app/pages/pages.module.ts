import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioClienteComponent } from './usuario-cliente/usuario-cliente.component';
import { UsuarioProveedorComponent } from './usuario-proveedor/usuario-proveedor.component';
import { PAGES_ROUTES } from './pages.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';



@NgModule({

  declarations: [
    UsuarioClienteComponent,
    UsuarioProveedorComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MatSidenavModule,
    MatButtonModule,
    MatListModule

  ]
})
export class PagesModule { }
