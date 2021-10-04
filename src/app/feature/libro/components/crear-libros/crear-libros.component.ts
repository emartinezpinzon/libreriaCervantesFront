import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { delay, tap } from 'rxjs/operators';
import { LibroService } from '@libro/shared/service/libro.service';
import { HttpErrorResponse } from '@angular/common/http';

const CANTIDAD_MINIMA_LIBROS = 0;
const PRECIO_MINIMO_LIBROS = 999;
const ESPERA_GUARDADO = 500;

const REGISTRO_EXITOSO = 'El libro ha sido registrado con exito';

@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html'
})
export class CrearLibrosComponent implements OnInit {
  libroForm: FormGroup;

  constructor(protected libroService: LibroService, private router: Router) {}

  ngOnInit(): void {
    this.construirFormularioLibro();
  }

  onSubmit() {
    this.libroService
      .guardar(this.libroForm.value)
      .pipe(
        tap(() => this.router.navigate(['libro'])),
        delay(ESPERA_GUARDADO)
      )
      .subscribe(
        () => {
          alert(REGISTRO_EXITOSO);
        },
        (error: HttpErrorResponse) => {
          alert(error.error.mensaje);
        }
      );
  }

  private construirFormularioLibro() {
    this.libroForm = new FormGroup({
      titulo: new FormControl(Validators.required),
      categoria: new FormControl(),
      distribucion: new FormControl(),
      disponibles: new FormControl(Validators.min(CANTIDAD_MINIMA_LIBROS)),
      precio: new FormControl(Validators.min(PRECIO_MINIMO_LIBROS))
    });
  }
}
