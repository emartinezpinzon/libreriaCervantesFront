import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';
import { delay, tap } from 'rxjs/operators';

const REGISTRO_EXITOSO = "La factura se ha generado con éxito";

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html'
})
export class CrearFacturaComponent implements OnInit {

  factura = {} as Factura;

  constructor(protected facturaService: FacturaService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.facturaService.guardar(this.factura)
    .pipe(
      tap(() => this.router.navigate(["factura"])),
      delay(500)
    )
    .subscribe(
      (data) => {
        alert(REGISTRO_EXITOSO);
        console.log(data);
        localStorage.setItem("facturaId", data["valor"]);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.mensaje);
      }
    )
  }

}
