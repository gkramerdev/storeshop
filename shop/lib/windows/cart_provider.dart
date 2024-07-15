import 'package:flutter/material.dart';
import 'package:shop/models/product_model.dart';

class CartProvider with ChangeNotifier {
  final Map<int, CartItem> _cartItems = {};

  Map<int, CartItem> get cartItems => _cartItems;

  //int get itemCount => _cartItems.length;

  int get itemCount =>
      _cartItems.values.fold(0, (total, item) => total + item.quantity);

  double get totalPrice => _cartItems.values
      .fold(0.0, (total, item) => total + item.product.price * item.quantity);

  void addItem(Product product, int quantity) {
    if (_cartItems.containsKey(product.id)) {
      _cartItems[product.id]!.quantity += quantity;
    } else {
      _cartItems[product.id] = CartItem(product: product, quantity: quantity);
    }
    notifyListeners();
  }

  void removeItem(Product product) {
    _cartItems.remove(product.id);
    notifyListeners();
  }

  void clearCart() {
    _cartItems.clear();
    notifyListeners();
  }

  void incrementQuantity(Product product) {
    if (_cartItems.containsKey(product.id)) {
      _cartItems[product.id]!.quantity++;
      notifyListeners();
    }
  }

  void decrementQuantity(Product product) {
    if (_cartItems.containsKey(product.id) &&
        _cartItems[product.id]!.quantity > 1) {
      _cartItems[product.id]!.quantity--;
      notifyListeners();
    } else {
      removeItem(product);
    }
  }
}

class CartItem {
  final Product product;
  int quantity;

  CartItem({required this.product, required this.quantity});
}
