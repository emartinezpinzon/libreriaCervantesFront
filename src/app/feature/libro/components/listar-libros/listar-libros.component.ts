import { Component, OnInit } from "@angular/core";
import { Libro } from "@libro/shared/model/libro";
import { LibroService } from "@libro/shared/service/libro.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-listar-libros",
  templateUrl: "./listar-libros.component.html"
})
export class ListarLibrosComponent implements OnInit {
  public listaLibros: Observable<Libro[]>;

  constructor(protected libroService: LibroService) {}

  ngOnInit() {
    this.listaLibros = this.libroService.consultar();
  }
}
