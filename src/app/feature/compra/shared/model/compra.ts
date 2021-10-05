import { ICompra } from "./compra.interface";

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

  constructor(compra: ICompra) {
    this.id = compra.id;
    this.libroId = compra.libroId;
    this.cantidad = compra.cantidad;
    this.fechaEntrega = compra.fechaEntrega;
    this.titulo = compra.titulo;
    this.categoria = compra.categoria;
    this.distribucion = compra.distribucion;
    this.disponibles = compra.disponibles;
    this.precio = compra.precio;
  }
}
