import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { LibroPage } from '../page/libro/libro.po';
import { randomUUID } from 'crypto';
import { browser } from 'protractor';

describe('workspace-project Libro', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let libro: LibroPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        libro = new LibroPage();
    });

    it('Deberia crear libro', () => {
        const TITULO = randomUUID();
        const CATEGORIA = 'Literatura';
        const DISTRIBUCION = 'Nacional';
        const DISPONIBLES = 15;
        const PRECIO = 1000;

        page.navigateTo();
        navBar.clickBotonLibro();
        libro.clickBotonCrearLibro();

        libro.ingresarTitulo(TITULO);
        libro.seleccionarCategoria(CATEGORIA);
        libro.seleccionarDistribucion(DISTRIBUCION);
        libro.ingresarDisponibles(DISPONIBLES);
        libro.ingresarPrecio(PRECIO);

        libro.clickBotonGuardarNuevoLibro();
        browser.sleep(2000);

        browser.switchTo().alert().accept();
    });

    it('Deberia listar libros', () => {
        browser.sleep(2000);
        page.navigateTo();
        navBar.clickBotonLibro();

        expect(1).toBe(libro.contarLibrosRegistrados());
    });

    it('Deberia crear compra', () => {
        browser.sleep(2000);
        const CANTIDAD_COMPRA = 5;

        page.navigateTo();
        navBar.clickBotonLibro();
        browser.sleep(2000);
        libro.ingresarCantidad(CANTIDAD_COMPRA);

        libro.clickBotonGuardarNuevaCompra();
    });
});
