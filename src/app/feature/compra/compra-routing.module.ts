import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCompraComponent } from '@compra/components/listar-compra/listar-compra.component';


const routes: Routes = [
  {
    path: '',
    component: ListarCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
