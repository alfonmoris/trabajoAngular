import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pizza = {
    "name":"Especial",
    "descrip":"muzza, morron y jamon",
    "price":"1",
    "stock":"3",
    "image": "assets/especial.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
