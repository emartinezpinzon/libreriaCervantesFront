import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Libro } from "@libro/shared/model/libro";

@Injectable()
export class LibroService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Libro[]>(
      `${environment.endpoint}/libro`,
      this.http.optsName("consultar libros")
    );
  }

  public guardar(libro: Libro) {
    return this.http.doPost<Libro, boolean>(
      `${environment.endpoint}/libros`,
      libro,
      this.http.optsName("crear/actualizar libro")
    );
  }
}
