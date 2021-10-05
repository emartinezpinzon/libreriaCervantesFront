import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';


@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html'
})
export class VerFacturaComponent implements OnInit {
  facturaID: number;
  public factura = {} as Factura;

  constructor(protected facturaService: FacturaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.facturaID = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.facturaService.consultarById(this.facturaID).subscribe(
      data => {
        this.factura = data;        
      }
    );
  }

}
