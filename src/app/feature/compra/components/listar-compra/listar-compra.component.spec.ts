import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Compra } from '@compra/shared/model/compra';
import { CompraService } from '@compra/shared/service/compra.service';
import { of } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { ListarCompraComponent } from './listar-compra.component';

describe('ListarCompraComponent', () => {
  let component: ListarCompraComponent;
  let fixture: ComponentFixture<ListarCompraComponent>;

  let compraServicioStub: Partial<CompraService>;
  let dummyCompras: Compra[] = [
    new Compra({
      id: 1,
      libroId: 1,
      cantidad: 3,
      fechaEntrega: "2021-10-07",
      titulo: "Ficciones",
      categoria: "Literatura",
      distribucion: "Nacional",
      disponibles: 2,
      precio: 10000,
    }),
    new Compra({
      id: 1,
      libroId: 1,
      cantidad: 3,
      fechaEntrega: "2021-10-07",
      titulo: "Claraboya",
      categoria: "Literatura",
      distribucion: "Nacional",
      disponibles: 2,
      precio: 10000,
    }),
  ];

  compraServicioStub = {
    consultar: () => {
      return of(dummyCompras);
    },
  };

  beforeEach(async () => {
     await TestBed.configureTestingModule({
         declarations: [ ListarCompraComponent ],
         imports: [
            CommonModule,
            HttpClientTestingModule,
            RouterTestingModule
         ],
         providers: [{ provide: CompraService, HttpService, useValue: compraServicioStub }]
     })
     .compileComponents(); 
  });

  beforeEach(() => {
      fixture = TestBed.createComponent(ListarCompraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe listar las compras registradas', () => {
    component.ngOnInit();

    component.listaCompra.subscribe(respuesta => {
      expect(respuesta).toEqual(dummyCompras);
    })
  });

  it('Debe mostrar alerta sin compras registradas', () => {
    dummyCompras = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#vacio');
    expect(MSG.innerText).toEqual('Aún no ha agregado ningún libro a la compra');
  });
});
