import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Libro } from "../model/libro";

@Injectable()
export class ListarLibrosService {

    constructor(protected http: HttpService) {}

    public consultar() {
        return this.http.doGet<Libro[]>(`${environment.endpoint}/libros`,
        this.http.optsName('listar libros'));
    }
}