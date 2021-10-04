import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';
import { CompraService } from './compra.service';

describe('CompraService', () => {
  let compraServicio: CompraService;
  let compraServicioMock: HttpTestingController;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService],
    });
    compraServicioMock = injector.inject(HttpTestingController);
    compraServicio = TestBed.inject(CompraService);
  });

  it('Debe crear el servicio', () => {
    expect(compraServicio).toBeTruthy();
  });

  it('Debe crear una compra', () => {
    let dummyCompra: Compra = new Compra(
      1,
      1,
      3,
      "2021-10-07",
      "Ficciones",
      "Literatura",
      "Nacional",
      2,
      10000
    );

    compraServicio.guardar(dummyCompra).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const request = compraServicioMock.expectOne(
      `${environment.endpoint}/compra`
    );
    expect(request.request.method).toBe("POST");
    request.event(new HttpResponse<boolean>({ body: true }));
  });

  it('Debe consultar las compras registradas', () => {
    let dummyCompras: Compra[] = [
      new Compra(
        1,
        1,
        3,
        "2021-10-07",
        "Ficciones",
        "Literatura",
        "Nacional",
        2,
        10000
      ),
      new Compra(
        2,
        2,
        3,
        "2021-10-07",
        "Cantar de ciegos",
        "Literatura",
        "Internacional",
        2,
        10000
      ),
    ];
    let cantidadCompras = dummyCompras.length;

    compraServicio.consultar().subscribe((compras) => {
      expect(compras.length).toBe(cantidadCompras);
      expect(compras).toEqual(dummyCompras);
    });

    const request = compraServicioMock.expectOne(
      `${environment.endpoint}/compra`
    );
    expect(request.request.method).toBe("GET");
    request.flush(dummyCompras);
  });
});
