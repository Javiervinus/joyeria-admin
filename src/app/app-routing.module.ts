import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NoticiasComponent } from "./pages/noticias/noticias.component";
import { HorarioComponent } from './pages/horario/horario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DesarrolladoresComponent } from './pages/desarrolladores/desarrolladores.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'noticias', pathMatch: 'full' },
            {
                path: 'noticias',
                component: NoticiasComponent
            },
            {
                path: 'horario',
                component: HorarioComponent
            },
            {
                path: 'productos',
                component: ProductosComponent
            },
            {
                path: 'desarrolladores',
                component: DesarrolladoresComponent
            },
            {
                path: 'acercaDe',
                component: AcercaDeComponent
            },
            {
                path: 'iniciarSesion',
                component: IniciarSesionComponent
            }


        ]
    },
    { path: '**', redirectTo: 'home/noticias' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }