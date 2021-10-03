import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CompraService } from './shared/service/compra.service';
import { CompraComponent } from './components/compra/compra.component';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CrearFacturaComponent } from '@factura/components/crear-factura/crear-factura.component';

@NgModule({
  declarations: [
    CompraComponent,
    ListarCompraComponent,
    CrearFacturaComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [CompraService]
})
export class CompraModule { }
