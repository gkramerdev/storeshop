import { Product } from '../product/product.model';

export interface Cart {
  id: number;
  totalPrice: number;
  productList: Product[];
}
