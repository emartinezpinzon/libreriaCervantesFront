import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../../shared/model/compra';
import { CompraService } from '@compra/shared/service/compra.service';

@Component({
    selector: 'app-listar-compra',
    templateUrl: './listar-compra.component.html'
})

export class ListarCompraComponent implements OnInit {
    public listaCompra: Observable<Compra[]>;

    constructor(protected compraService: CompraService) {}

    ngOnInit() {
        this.listaCompra = this.compraService.consultar();
    }
}
