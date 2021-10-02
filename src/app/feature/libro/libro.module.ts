import { NgModule } from "@angular/core";
import { LibroComponent } from "@libro/components/libro/libro.component";
import { ListarLibrosComponent } from "@libro/components/listar-libros/listar-libros.component";
import { CrearLibrosComponent } from "@libro/components/crear-libros/crear-libros.component";
import { LibroRoutingModule } from "@libro/libro-routing.module";
import { SharedModule } from "@shared/shared.module";
import { LibroService } from "./shared/service/libro.service";
import { CrearCompraComponent } from "@compra/components/crear-compra/crear-compra.component";

@NgModule({
  declarations: [
    LibroComponent,
    ListarLibrosComponent,
    CrearLibrosComponent,
    CrearCompraComponent,
  ],
  imports: [LibroRoutingModule, SharedModule],
  providers: [LibroService],
})
export class LibroModule {}
