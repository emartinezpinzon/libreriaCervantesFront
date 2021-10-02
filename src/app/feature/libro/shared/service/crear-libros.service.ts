import { environment } from "src/environments/environment";
import { Libro } from "../model/libro";
import { HttpService } from "@core/services/http.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CrearLibrosService {
    
    constructor(protected http: HttpService) { }

    public guardar(libro: Libro) {
        return this.http.doPost<Libro, boolean>(
            `${environment.endpoint}/libros`, 
            libro,
            this.http.optsName('crear/actualizar libro')
        );
    }
}