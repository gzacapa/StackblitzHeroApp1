import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items = this.cartService.getItems();
subtotal = this.getsubtotal(this.items);
checkoutForm = this.formBuilder.group({
  name: '',
  address: ''
});

getsubtotal(items){
  let subtotalTemp = 0;
  items.forEach(function(item) {
    let price = item.price;
    subtotalTemp = subtotalTemp + price;
  })
  return subtotalTemp;
}
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}