import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';

@Injectable()
export class ListarCompraService {

  constructor(protected http: HttpService) {}

  public consultar() {
    const url = `${environment.endpoint}/compra`;

    console.log("============================================================");
    console.log(url);
    console.log("============================================================");
    
    let x = this.http.doGet<Compra[]>(`${environment.endpoint}/compra`,
      this.http.optsName('listar compras'));

    console.log(x);

    return x;
    
  }

  public guardar(compra: Compra) {
    return this.http.doPost<Compra, boolean>(`${environment.endpoint}/compra`, compra,
                                                this.http.optsName('crear/crear compra'));
  }

  //Posible error en optsName línea 18
}
