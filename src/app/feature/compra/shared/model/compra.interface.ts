export interface ICompra {
    id: number;
    libroId: number;
    cantidad: number;
    fechaEntrega: string;
    titulo: string;
    categoria: string;
    distribucion: string;
    disponibles: number;
    precio: number;
}
