import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shop/models/product_model.dart';

class ProductService {
  final String baseUrl = 'http://10.0.2.2:3000'; // IP ANDROID
  Future<List<Product>> fetchProducts() async {
    final response = await http.get(Uri.parse('$baseUrl/products'));

    if (response.statusCode == 200) {
      List<dynamic> jsonResponse = json.decode(response.body);
      return jsonResponse.map((product) => Product.fromJson(product)).toList();
    } else {
      throw Exception('Failed to load products');
    }
  }
}
