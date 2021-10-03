import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCompraComponent } from '@compra/components/listar-compra/listar-compra.component';
import { CrearFacturaComponent } from '@factura/components/crear-factura/crear-factura.component';
import { CompraComponent } from '@compra/components/compra/compra.component';


const routes: Routes = [
  {
    path: "",
    component: CompraComponent,
    children: [
      {
        path: "facturar",
        component: CrearFacturaComponent,
      },
      {
        path: "listar",
        component: ListarCompraComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
