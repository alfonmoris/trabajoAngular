import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class PizzaCartService {

  private _cartList:Pizza[] = [];
  cartList: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

  constructor() { }

  addToCart(pizza:Pizza){
   let item:Pizza | undefined =this._cartList.find((v1) => v1.name == pizza.name)
   if(!item){
    this._cartList.push({...pizza});
   }else{
     item.quantity += pizza.quantity;
   }

   console.log(this._cartList.length);
   this.cartList.next(this._cartList);
  }
 
  deleteFromCart(pizza: Pizza){
    let item : Pizza = this._cartList.find((v1)=>v1.name === pizza.name)!;
    let indice = this._cartList.findIndex((v1)=>v1.name === pizza.name)!;
    if (item){
      this._cartList.splice(indice,1);
    }
  }
}
