import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/components/all-products/AllProductsComponent';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
