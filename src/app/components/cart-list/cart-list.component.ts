import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartItems = this.cartService.cartItems;

  constructor(private cartService: CartService) {}
}
