import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibroComponent } from "@libro/components/libro/libro.component";
import { CrearLibrosComponent } from "@libro/components/crear-libros/crear-libros.component";
import { ListarLibrosComponent } from "@libro/components/listar-libros/listar-libros.component";


const routes: Routes = [
    {
        path: '',
        component: LibroComponent,
        children: [
            {
                path: 'crear',
                component: CrearLibrosComponent
            },
            {
                path: 'listar',
                component: ListarLibrosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibroRoutingModule {}