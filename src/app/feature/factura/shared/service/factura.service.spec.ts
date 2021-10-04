import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Factura } from '../model/factura';
import { FacturaService } from './factura.service';

describe('FacturaService', () => {
  let facturaServicio: FacturaService;
  let facturaServicioMock: HttpTestingController;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FacturaService, HttpService]
    });

    facturaServicioMock = injector.inject(HttpTestingController);
    facturaServicio = TestBed.inject(FacturaService);
  });

  it("Debe crear el servicio", () => {
    expect(facturaServicio).toBeTruthy();
  });

  it('Debe crear una factura', () => {
    let dummyFactura = {} as Factura;

    facturaServicio.guardar(dummyFactura).subscribe(respuesta => {
      expect(respuesta).toEqual(true);
    });

    const request = facturaServicioMock.expectOne(
      `${environment.endpoint}/factura`
    );
    expect(request.request.method).toBe("POST");
    request.event(new HttpResponse<boolean>({ body: true }));
  });

  it('Debe consultar una factura por su ID', () => {
    let dummyFactura: Factura = new Factura(1, "2021-10-03", 150000);

    facturaServicio.consultarById(dummyFactura.id).subscribe(factura => {
      expect(factura).toEqual(dummyFactura);
    });

    const request = facturaServicioMock.expectOne(
      `${environment.endpoint}/factura/${dummyFactura.id}`
    );
    expect(request.request.method).toBe("GET");
    request.event(new HttpResponse<Factura>({body: dummyFactura}));
  });
});
