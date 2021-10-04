import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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

  let service: LibroService;
  let dummyLibros: Libro[] = [
    new Libro(1, "Ficciones", "Literatura", "Nacional", 3, 10),
    new Libro(2, "Mujercitas", "Literatura", "Internacional", 5, 15)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLibrosComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [LibroService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(LibroService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se deben consultar los libros', () => {
    // Arrange
    spyOn(service, 'consultar').and.returnValue(of(dummyLibros));

    // Act
    component.ngOnInit();

    // Assert
    component.listaLibros.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    })
  });

  //Agregar test para validar notificación

  afterEach(() => {
    fixture.destroy();
  });
});
