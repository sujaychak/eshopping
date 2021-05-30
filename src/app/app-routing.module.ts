import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './cart/order/order.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

const routes: Routes = [
  { path: "order", component: OrderComponent },
  { path: 'login', component: SigninComponent },
  { path: 'products', component: ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
