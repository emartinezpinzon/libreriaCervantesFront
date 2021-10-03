import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compra } from '@compra/shared/model/compra';
import { CompraService } from '@compra/shared/service/compra.service';
import { delay, tap } from 'rxjs/operators';

const CANTIDAD_MINIMA_COMPRA = 1;

const REGISTRO_EXITOSO = "El libro ha sido agregado a la compra con exito";

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {

  @Input()
  libroId: number;

  compraForm: FormGroup;
  compra = {} as Compra;

  constructor(protected compraService: CompraService, private router: Router) {
  }

  ngOnInit() {
    this.construirFormularioCompra();
  }

  onSubmit() {
    this.compra = this.compraForm.value;
    this.compra.libroId = this.libroId;

    this.compraService.guardar(this.compra)
    .pipe(
      tap(() => this.router.navigate(["compra"])),
      delay(500)
    )
    .subscribe(
      (data) => {
        alert(REGISTRO_EXITOSO);
        console.log(data);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.error.mensaje);
      }
    );
  }

  private construirFormularioCompra() {
    this.compraForm = new FormGroup({
      cantidad: new FormControl("", Validators.min(CANTIDAD_MINIMA_COMPRA))
    })
  }
}
