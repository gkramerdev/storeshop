import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    return this.productService.getProductById(parseInt(id, 10));
  }
}
