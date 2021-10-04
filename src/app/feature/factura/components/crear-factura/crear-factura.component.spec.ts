/* tslint:disable:no-unused-variable */
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { FacturaService } from "@factura/shared/service/factura.service";

import { CrearFacturaComponent } from "./crear-factura.component";

describe("CrearFacturaComponent", () => {
  let component: CrearFacturaComponent;
  let fixture: ComponentFixture<CrearFacturaComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CrearFacturaComponent],
      imports: [CommonModule, HttpClientModule, RouterTestingModule],
      providers: [FacturaService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Debe crearse el componente", () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear factura', () => {
    const spyRedirect = spyOn(component, 'onSubmit').and.callThrough();
    const botonFacturar = fixture.debugElement.nativeElement.querySelector('#facturar');
    botonFacturar.click();
    fixture.detectChanges();
    component.ngOnInit();
    expect(spyRedirect).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
