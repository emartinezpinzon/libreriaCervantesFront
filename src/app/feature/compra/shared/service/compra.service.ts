import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Compra[]>(`${environment.endpoint}/compra`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Compra) {
    return this.http.doPost<Compra, boolean>(`${environment.endpoint}/compra`, producto,
                                                this.http.optsName('crear/actualizar productos'));
  }

  //Posible error en optsName línea 18
}
