import { Component, Input, computed, signal } from '@angular/core';
import { CartItem } from 'src/app/models/model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  private _item!: CartItem;
  qtyArr = signal([1, 2, 3, 4, 5, 6, 7, 8]);

  @Input() set item(item: CartItem) {
    this._item = item;
    this.cartItem.set(item);
    this.quantity.set(item.quantity);
  }

  get item() {
    return this._item;
  }

  quantity = signal(1);

  cartItem = signal(this.item);
  exPrice = computed(
    () => this.quantity() * +this.cartItem()?.vehicle.cost_in_Credits
  );

  onQuantitySelected(q: number) {
    this.quantity.set(q);
  }
}
