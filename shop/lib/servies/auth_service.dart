import 'dart:convert';
import 'package:http/http.dart' as http;

class AuthService {
  static const String baseUrl = 'http://10.0.2.2:3000'; // IP ANDROID

  Future<String?> login(String email, String password) async {
    final url = Uri.parse('$baseUrl/login');
    final response = await http.post(
      url,
      body: {
        'email': email,
        'password': password,
      },
    );

    if (response.statusCode == 201) {
      // Login bem-sucedido
      return jsonDecode(response.body)['accessToken'];
    } else if (response.statusCode == 401) {
      // Credenciais inválidas
      throw Exception('Credenciais inválidas');
    } else {
      // Tratar outros códigos de erro, se necessário
      throw Exception('Erro durante o login');
    }
  }
}
