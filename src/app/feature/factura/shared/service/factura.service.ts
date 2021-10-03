import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Factura } from "../model/factura";

@Injectable()
export class FacturaService {

    constructor(protected http: HttpService) {}

    public consultarById(id: number) {
        return this.http.doGet<Factura>(`${environment.endpoint}/factura/${id}`,
                                                    this.http.optsName('listar compras'));
    }

    public guardar(factura: Factura) {
        return this.http.doPost<Factura, boolean>(`${environment.endpoint}/factura`, factura,
                                                    this.http.optsName('crear factura'));
    }
}
