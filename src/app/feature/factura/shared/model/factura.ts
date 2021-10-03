export class Factura {
    id: number;
    fechaCompra: string;
    precioFinal: number;

    constructor(id: number, fechaCompra: string, precioFinal: number) {
        this.id = id;
        this.fechaCompra = fechaCompra;
        this.precioFinal = precioFinal;
    }
}