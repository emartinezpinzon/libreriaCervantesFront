import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Libro } from '../model/libro';
import { LibroService } from './libro.service';

describe('LibroService', () => {
    let libroServicio: LibroService;
    let libroServicioMock: HttpTestingController;

    let dummyLibro: Libro = new Libro(1, "Ficciones", "Literatura", "Nacional", 3, 10);

    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LibroService, HttpService]
        });
        libroServicioMock = injector.inject(HttpTestingController);
        libroServicio = TestBed.inject(LibroService);
    });

    it('Debe crear el servicio', () => {
        expect(libroServicio).toBeTruthy();
    });

    it('Debe crear un libro', () => {
        libroServicio.guardar(dummyLibro).subscribe(
            (respuesta) => {
                expect(respuesta).toEqual(true);
            }
        );

        const req = libroServicioMock.expectOne(`${environment.endpoint}/libros`);

        expect(req.request.method).toBe('POST');

        req.event(new HttpResponse<boolean>({body: true}));
    });
});
