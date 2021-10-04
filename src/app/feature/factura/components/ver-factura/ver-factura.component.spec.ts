import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FacturaService } from '@factura/shared/service/factura.service';
import { HttpService } from '@core/services/http.service';

import { VerFacturaComponent } from './ver-factura.component';
import { Factura } from '@factura/shared/model/factura';
import { of } from 'rxjs';

describe('VerFacturaComponent', () => {
  let component: VerFacturaComponent;
  let fixture: ComponentFixture<VerFacturaComponent>;

  let facturaServicioStub: Partial<FacturaService>;
  let dummyFactura: Factura = new Factura(1, '2021-10-03', 150000);

  facturaServicioStub = {
    consultarById: () => {
      return of(dummyFactura);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFacturaComponent ],
      imports: [ CommonModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [{ provide: FacturaService, HttpService, useValue: facturaServicioStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe obtener la factura registrada', () => {
    component.ngOnInit();

    expect(component.factura).toEqual(dummyFactura);
  });
});
