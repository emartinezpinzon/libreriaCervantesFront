/* tslint:disable:no-unused-variable */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompraService } from '@compra/shared/service/compra.service';
import { HttpService } from '@core/services/http.service';
import { CrearCompraComponent } from './crear-compra.component';

describe('CrearCompraComponent', () => {
  let component: CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CrearCompraComponent],
      imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [CompraService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear uan compra', () => {
    const spyRedirect = spyOn(component, 'onSubmit').and.callThrough();
    const botonAgregar = fixture.debugElement.nativeElement.querySelector('#compra');
    botonAgregar.click();
    fixture.detectChanges();
    component.onSubmit();
    expect(spyRedirect).toHaveBeenCalled();
  });
});
