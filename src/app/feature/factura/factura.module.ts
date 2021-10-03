import { NgModule } from "@angular/core";

import { FacturaRoutingModule } from "./factura-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FacturaComponent } from "./components/factura/factura.component";
import { VerFacturaComponent } from "./components/ver-factura/ver-factura.component";
import { FacturaService } from "./shared/service/factura.service";

@NgModule({
    declarations: [
        FacturaComponent,
        VerFacturaComponent
    ],
    imports: [
        FacturaRoutingModule,
        SharedModule
    ],
    providers: [FacturaService]
})
export class FacturaModule { }
