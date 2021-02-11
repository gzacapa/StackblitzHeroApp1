import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items = this.cartService.getItems();
subtotal = this.getsubtotal(this.items);
getsubtotal(items){
  let subtotalTemp = 0;
  items.forEach(function(item) {
    let price = item.price;
    subtotalTemp = subtotalTemp + price;
  })
  return subtotalTemp;
}
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

}