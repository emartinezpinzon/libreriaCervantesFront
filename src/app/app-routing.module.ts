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
  { path: 'compra', loadChildren: () => import('./feature/compra/compra.module').then(mod => mod.CompraModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
