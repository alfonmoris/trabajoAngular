import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AboutComponent,
    PizzasComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
