import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Libro } from "@libro/shared/model/libro";
import { delay, tap } from "rxjs/operators";
import { LibroService } from "@libro/shared/service/libro.service";

const CANTIDAD_MINIMA_LIBROS = 10;
const PRECIO_MINIMO_LIBROS = 999;

@Component({
  selector: "app-crear-libros",
  templateUrl: "./crear-libros.component.html",
  styleUrls: ["./crear-libros.component.css"],
})
export class CrearLibrosComponent implements OnInit {
  libroForm: FormGroup;
  libro = {} as Libro;

  constructor(protected libroService: LibroService, private router: Router) {}

  ngOnInit(): void {
    this.construirFormularioLibro();
  }

  onSubmit() {
    this.libroService
      .guardar(this.libroForm.value)
      .pipe(
        tap(() => this.router.navigate(["libro"])),
        delay(500)
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private construirFormularioLibro() {
    this.libroForm = new FormGroup({
      titulo: new FormControl("", Validators.required),
      categoria: new FormControl(""),
      distribucion: new FormControl(""),
      disponibles: new FormControl("", Validators.min(CANTIDAD_MINIMA_LIBROS)),
      precio: new FormControl("", Validators.min(PRECIO_MINIMO_LIBROS)),
    });
  }
}
