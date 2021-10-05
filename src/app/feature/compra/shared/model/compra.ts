export class Compra {
  id: number;
  libroId: number;
  cantidad: number;
  fechaEntrega: string;
  titulo: string;
  categoria: string;
  distribucion: string;
  disponibles: number;
  precio: number;

//Change

  constructor(
    id: number,
    libroId: number,
    cantidad: number,
    fechaEntrega: string,
    titulo: string,
    categoria: string,
    distribucion: string,
    disponibles: number,
    precio: number
  ) {
    this.id = id;
    this.libroId = libroId;
    this.cantidad = cantidad;
    this.fechaEntrega = fechaEntrega;
    this.titulo = titulo;
    this.categoria = categoria;
    this.distribucion = distribucion;
    this.disponibles = disponibles;
    this.precio = precio;
  }
}
