import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Compra[]>(`${environment.endpoint}/compra`,
      this.http.optsName('listar compras'));
  }

  public guardar(compra: Compra) {
    return this.http.doPost<Compra, boolean>(`${environment.endpoint}/compra`, compra,
                                                this.http.optsName('crear/crear compra'));
  }

  //Posible error en optsName línea 18
}
