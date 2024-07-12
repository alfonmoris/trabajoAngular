import { Component, OnInit } from '@angular/core';
import { PizzaCartService } from '../pizza-cart.service';
import { PizzaDataService } from '../pizza-data.service';
import { Pizza } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pizzas: Pizza[] = [];
  constructor(
    private cart:PizzaCartService,
    private pizzaDataService: PizzaDataService) { 
  }

  ngOnInit(): void {
    this.pizzaDataService.getAll()
    .subscribe(pizzas => this.pizzas = pizzas );
  }

  addToCart(pizza:Pizza): void{
   this.cart.addToCart(pizza);
   pizza.stock -= pizza.quantity;
   pizza.quantity = 0;
  }

  maxReached(m: string){

  }

}

