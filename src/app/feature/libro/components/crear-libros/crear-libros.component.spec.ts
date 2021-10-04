import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
//import { Libro } from '@libro/shared/model/libro';
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

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia tener el boton de guardar deshabilitado al ser formulario invalido', () => {
    const botonGuardar = fixture.debugElement.nativeElement.querySelector('#guardar');
    expect(botonGuardar.disabled).toBeTrue();
  });

  it('Debería crear libro', () => {
    const spyRedirect = spyOn(component, 'onSubmit').and.callThrough();
    const botonGuardar = fixture.debugElement.nativeElement.querySelector('#guardar');
    botonGuardar.click();
    fixture.detectChanges();
    component.onSubmit();
    expect(spyRedirect).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
