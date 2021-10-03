import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FacturaComponent } from "./components/factura/factura.component";
import { VerFacturaComponent } from "./components/ver-factura/ver-factura.component";

const routes: Routes = [
  {
    path: "",
    component: FacturaComponent,
    children: [
      {
        path: "ver",
        component: VerFacturaComponent,
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacturaRoutingModule { }
