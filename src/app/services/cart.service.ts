import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Vehicle } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartItems = signal<CartItem[]>([]);

  cartItemsQ = computed(() =>
    this.cartItems().reduce((acc, i) => acc + i.quantity, 0)
  );

  addToCart(vehicle: Vehicle) {
    this.cartItems.update((items) => {
      return items.map((item) => {
        if (item.vehicle.name === vehicle.name) {
          item.quantity++;
        }
        return item;
      });
    });

    if (
      !this.cartItems().length ||
      !this.cartItems().some((i) => i.vehicle.name === vehicle.name)
    ) {
      this.cartItems.set([
        ...this.cartItems(),
        {
          vehicle,
          quantity: 1,
        },
      ]);
    }
  }
}
