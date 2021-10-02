import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { SharedModule } from '@shared/shared.module';
import { ListarCompraService } from './shared/service/listar-compra.service';
import { CompraComponent } from './components/compra/compra.component';


@NgModule({
  declarations: [
    CompraComponent,
    ListarCompraComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [ListarCompraService]
})
export class CompraModule { }
