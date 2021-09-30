import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { SharedModule } from '@shared/shared.module';
import { CompraService } from './shared/service/compra.service';


@NgModule({
  declarations: [
    ListarCompraComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [CompraService]
})
export class CompraModule { }
