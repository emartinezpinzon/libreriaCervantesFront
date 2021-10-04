import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Libro } from '@libro/shared/model/libro';
import { LibroService } from '@libro/shared/service/libro.service';
import { of } from 'rxjs';

import { ListarLibrosComponent } from './listar-libros.component';

describe('ListarLibrosComponent', () => {
  let component: ListarLibrosComponent;
  let fixture: ComponentFixture<ListarLibrosComponent>;
  
  let libroServicioStub: Partial<LibroService>;
  let dummyLibros: Libro[] = [
    new Libro(1, "Ficciones", "Literatura", "Nacional", 3, 10),
    new Libro(2, "Mujercitas", "Literatura", "Internacional", 5, 15)
  ];

  libroServicioStub = {
    consultar: () => {
      return of(dummyLibros);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLibrosComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{ provide: LibroService, HttpService, useValue: libroServicioStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe listar los libros registrados', () => {
    component.ngOnInit;

    component.listaLibros.subscribe(respuesta => {
      expect(respuesta).toEqual(dummyLibros);
    })
  });

  it('Debe mostrar alerta sin libros registrados', () => {
    dummyLibros = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#vacio');
    expect(MSG.innerText).toEqual('Aún no ha agregado ningún libro en el sistema');
  });
});
