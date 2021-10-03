import { Component, OnInit } from '@angular/core';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.css']
})
export class VerFacturaComponent implements OnInit {
  public factura: Observable<Factura>;

  constructor(protected facturaService: FacturaService) { }

  ngOnInit() {
    let x = localStorage.getItem("facturaId");
    let facturaId = +x;

    this.factura = this.facturaService.consultarById(facturaId);
  }

}
