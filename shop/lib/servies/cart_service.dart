import 'package:shop/models/cart_model.dart';
import 'package:shop/models/product_model.dart';

class CartService {
  Cart _cart = Cart(id: 1, productList: [], totalPrice: 0.0);

  void addToCart(Product product) {
    _cart.productList.add(product);
    _cart.totalPrice += product.price;
  }

  Cart getCart() {
    return _cart;
  }

  void clearCart() {
    _cart = Cart(id: 1, productList: [], totalPrice: 0.0);
  }
}
