import { NgModule } from '@angular/core';
import { FacturaComponent } from '@factura/components/factura/factura.component';
import { VerFacturaComponent } from '@factura/components/ver-factura/ver-factura.component';
import { SharedModule } from '@shared/shared.module';
import { FacturaRoutingModule } from '@factura/factura-routing.module';
import { FacturaService } from './shared/service/factura.service';
import { ListarCompraComponent } from '@compra/components/listar-compra/listar-compra.component'

@NgModule({
  declarations: [
    FacturaComponent,
    VerFacturaComponent,
    ListarCompraComponent    
  ],
  imports: [
    FacturaRoutingModule, 
    SharedModule
  ],
  providers: [FacturaService],
})
export class FacturaModule { }
