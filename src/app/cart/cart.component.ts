import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaCartService } from '../pizza-cart.service';
import { Pizza } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Pizza[]>;
  constructor(private cart : PizzaCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  deleteFromCart(Pizza: any):void{
    this.cart.deleteFromCart(Pizza);
  }

  submit(){
    }

  ngOnInit(): void {
  }

}
