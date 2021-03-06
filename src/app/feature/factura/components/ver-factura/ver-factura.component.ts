import { Component, OnInit } from '@angular/core';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html'
})
export class VerFacturaComponent implements OnInit {
  public factura = {} as Factura;

  constructor(protected facturaService: FacturaService) { }

  ngOnInit() {
    let x = localStorage.getItem('facturaId');
    let facturaId = +x;

    this.facturaService.consultarById(facturaId).subscribe(
      data => {
        this.factura = data;        
      }
    );
  }

}
