import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Compra } from "../../shared/model/compra";
import { ListarCompraService } from "@compra/shared/service/listar-compra.service";

@Component({
    selector: 'app-listar-compra',
    templateUrl: './listar-compra.component.html',
    styleUrls: ['./listar-compra.component.css']
})

export class ListarCompraComponent implements OnInit {
    public listaCompra: Observable<Compra[]>;

    constructor(protected compraService: ListarCompraService) {}

    ngOnInit() {
        this.listaCompra = this.compraService.consultar();
    }
}