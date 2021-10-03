import { NgModule } from '@angular/core';
import { FacturaComponent } from '@factura/components/factura/factura.component';
import { VerFacturaComponent } from '@factura/components/ver-factura/ver-factura.component';
import { SharedModule } from '@shared/shared.module';
import { FacturaRoutingModule } from '@factura/factura-routing.module';
import { FacturaService } from '@factura/shared/service/factura.service';

@NgModule({
  declarations: [
    FacturaComponent,
    VerFacturaComponent
  ],
  imports: [
    SharedModule,
    FacturaRoutingModule
  ],
  providers: [FacturaService]
})
export class FacturaModule { }
