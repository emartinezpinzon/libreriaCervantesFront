import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { CrearLibrosComponent } from '@libro/components/crear-libros/crear-libros.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule)},
  { path: 'libro', loadChildren: () => import('@libro/libro.module').then(mod => mod.LibroModule)},
  { path: 'crear-libro', component: CrearLibrosComponent},
  { path: 'compra', loadChildren: () => import('@compra/compra.module').then(mod => mod.CompraModule)},
  { path: 'factura/:id', loadChildren: () => import('@factura/factura.module').then(mod => mod.FacturaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
