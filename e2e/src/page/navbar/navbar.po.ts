import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/div/a[1]'));
    linkLibro = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/li[1]/a'));
    linkCompra = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/li[2]/a'));

    async clickBotonLibro() {
        await this.linkLibro.click();
    }

    async clickBotonCompra() {
        await this.linkCompra.click();
    }
}
