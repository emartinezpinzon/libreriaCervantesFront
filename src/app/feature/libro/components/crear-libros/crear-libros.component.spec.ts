import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLibrosComponent } from './crear-libros.component';

describe('CrearLibrosComponent', () => {
  let component: CrearLibrosComponent;
  let fixture: ComponentFixture<CrearLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
