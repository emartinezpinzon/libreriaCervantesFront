import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCompraComponent } from '@compra/components/listar-compra/listar-compra.component';
import { CompraComponent } from './components/compra/compra.component';


const routes: Routes = [
  {
    path: "",
    component: CompraComponent,
    children: [
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
