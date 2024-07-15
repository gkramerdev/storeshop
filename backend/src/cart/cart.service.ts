import { Injectable } from '@nestjs/common';
import { Product } from '../product/product.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
  private cart: Cart[] = [];

  addToCart(cartId: number, product: Product): void {
    let existingCart = this.cart.find(cart => cart.id === cartId);

    if (!existingCart) {
      existingCart = {
        id: cartId,
        totalPrice: 0,
        productList: [],
      };
      this.cart.push(existingCart);
    }

    existingCart.productList.push(product);
    existingCart.totalPrice += product.price;
  }

  getCart(cartId: number): Cart {
    return this.cart.find(cart => cart.id === cartId);
  }
}
