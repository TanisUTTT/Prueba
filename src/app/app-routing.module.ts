import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Redireccionar rutas
  { path: '', redirectTo: '/products', pathMatch: 'full' } ,
  { path: 'products', loadChildren: () => import('./Pages/Pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./Pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  //{ path: 'product', loadChildren: () => import('./Pages/Pages/products/product/product.component').then(m => m.ProductComponent) }  
  //Para redireccionar a otras paginas is entran a una ruta diferente
  //{ path: '**', redirectTo: '', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
