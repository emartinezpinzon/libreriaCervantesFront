import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CompraService } from '@compra/shared/service/compra.service';
import { CompraComponent } from '@compra/components/compra/compra.component';
import { ListarCompraComponent } from '@compra/components/listar-compra/listar-compra.component';
import { CrearFacturaComponent } from '@factura/components/crear-factura/crear-factura.component';
import { FacturaService } from '@factura/shared/service/factura.service';

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
  providers: [CompraService, FacturaService]
})
export class CompraModule { }
