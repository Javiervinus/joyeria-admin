import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NoticiasComponent } from "./pages/noticias/noticias.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'noticias', pathMatch: 'full' },
            {
                path: 'noticias',
                component: NoticiasComponent
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