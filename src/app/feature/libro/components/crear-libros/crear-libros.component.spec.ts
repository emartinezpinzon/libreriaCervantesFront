import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Libro } from '@libro/shared/model/libro';
import { LibroService } from '@libro/shared/service/libro.service';

import { CrearLibrosComponent } from './crear-libros.component';

describe('CrearLibrosComponent', () => {
  let component: CrearLibrosComponent;
  let fixture: ComponentFixture<CrearLibrosComponent>;

  let libroService: LibroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLibrosComponent ],
      imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [LibroService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    libroService = TestBed.inject(LibroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ser formulario invalido al estar vacío', () => {
    expect(component.libroForm.valid).toBeFalsy;
  });

  it('Debería crear libro', () => {
    // Arrange
    let nuevoLibro = {} as Libro;

    nuevoLibro.titulo = "1984";
    nuevoLibro.categoria = "Literatura";
    nuevoLibro.distribucion = "Nacional";
    nuevoLibro.disponibles = 3;
    nuevoLibro.precio = 10000;

    // Act
    const spyRedirect = spyOn(libroService, 'guardar').and.callThrough();
    fixture.detectChanges();
    libroService.guardar(nuevoLibro);

    // Assert
    expect(spyRedirect).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
