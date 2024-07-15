import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Product } from '../product/product.model';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':cartId/add-product')
  addToCart(@Param('cartId') cartId: number, @Body() product: Product): void {
    this.cartService.addToCart(cartId, product);
  }

  @Get(':cartId')
  getCart(@Param('cartId') cartId: number) {
    return this.cartService.getCart(cartId);
  }
}
