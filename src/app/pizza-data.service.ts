import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PizzasComponent } from './pizzas/pizzas.component';
import { Pizza } from './product-list/product';

const URL = 'https://668855640bc7155dc01b1eb1.mockapi.io/pizzas'
@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(URL)
    .pipe(
        tap((pizzas:Pizza[]) => pizzas.forEach(pizza => pizza.quantity = 0))
    );
  }
}
