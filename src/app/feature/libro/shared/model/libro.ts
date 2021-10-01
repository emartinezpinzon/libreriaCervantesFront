export class Libro {
    id: number;
    titulo: string;
    categoria: string;
    distribucion: string;
    disponibles: number;
    precio: number;

    constructor(id: number, titulo: string, categoria: string, distribucion: string, disponibles: number, precio: number) {
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.distribucion = distribucion;
        this.disponibles = disponibles;
        this.precio = precio;
    }
}
