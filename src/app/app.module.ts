import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { OrderComponent } from './cart/order/order.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    OrderComponent,
    ProductDetailsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
