import 'package:shop/models/product_model.dart';

class Cart {
  final int id;
  final List<Product> productList;
  late final double totalPrice;

  Cart({
    required this.id,
    required this.productList,
    required this.totalPrice,
  });
}
