import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { UsuarioClienteComponent } from './usuario-cliente/usuario-cliente.component';
import { UsuarioProveedorComponent } from './usuario-proveedor/usuario-proveedor.component';

const pagesRoutes: Routes = [
    {
        path: 'pages', component: PagesComponent,
        children: [
            { path: 'usuarioCliente', component: UsuarioClienteComponent },
            { path: 'usuarioProveedor', component: UsuarioProveedorComponent},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)