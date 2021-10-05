import { by, element } from 'protractor';

export class LibroPage {
    private linkCrearLibro = element(by.id('crear_libro'));
    private inputTitulo = element(by.id('titulo'));
    private selectCategoria = element(by.id('categoria'));
    private selectDistribucion = element(by.id('distribucion'));
    private inputDisponibles = element(by.id('disponibles'));
    private inputPrecio = element(by.id('precio'));
    private linkAgregarLibro = element(by.id('guardar'));
    private libros = element.all(by.id('tarjeta-libro'));
    private inputCantidad = element(by.id('cantidad'));;
    private linkAgregarCompra = element(by.id('agregar_compra'));

    async clickBotonCrearLibro() {
        await this.linkCrearLibro.click();
    }

    async ingresarTitulo(titulo: string) {
        await this.inputTitulo.sendKeys(titulo);
    }

    async seleccionarCategoria(categoria: string) {
        await this.selectCategoria.$(`[value="${categoria}"]`).click();
    }

    async seleccionarDistribucion(distribucion: string) {
        await this.selectDistribucion.$(`[value="${distribucion}"]`).click();
    }

    async ingresarDisponibles(disponibles: number) {
        await this.inputDisponibles.sendKeys(disponibles);
    }

    async ingresarPrecio(precio: number) {
        await this.inputPrecio.sendKeys(precio);
    }

    async clickBotonGuardarNuevoLibro() {
        await this.linkAgregarLibro.click();
    }

    async ingresarCantidad(cantidad: number) {
        await this.inputCantidad.sendKeys(cantidad);
    }

    async clickBotonGuardarNuevaCompra() {
        await this.linkAgregarCompra.click();
    }

    async contarLibrosRegistrados() {
        return (await this.libros).length;
    }
}
