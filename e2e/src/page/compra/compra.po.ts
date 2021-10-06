import { by, element } from 'protractor';

export class CompraPage {
    private linkCrearFactura = element(by.id('facturar'));
    
    async clickBotonCrearFactura() {
        await this.linkCrearFactura.click();
    }
}
