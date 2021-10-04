import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroComponent } from './libro.component';

describe('LibroComponent', () => {
  let component: LibroComponent;
  let fixture: ComponentFixture<LibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir el boton crear libro', () => {
    const MSG = fixture.nativeElement.querySelector('#crear_libro');
    expect(MSG.innerText).toEqual('Crear libro');
  });

  afterEach(() => {
    fixture.destroy();
  });
});
