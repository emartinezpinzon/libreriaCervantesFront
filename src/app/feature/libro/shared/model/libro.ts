import { ILibro } from './libro.interface';

export class Libro {
  id: number;
  titulo: string;
  categoria: string;
  distribucion: string;
  disponibles: number;
  precio: number;

  constructor(libro: ILibro) {
    this.id = libro.id;
    this.titulo = libro.titulo;
    this.categoria = libro.categoria;
    this.distribucion = libro.distribucion;
    this.disponibles = libro.disponibles;
    this.precio = libro.precio;
  }
}
