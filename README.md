
# Minha Aplicação

Esta é uma aplicação de exemplo que consiste em um frontend em Flutter e um backend em NestJS para gerenciar uma loja virtual simples.

## Frontend em Flutter

### Pré-requisitos

- Flutter SDK instalado
- Emulador Android/iOS ou dispositivo físico configurado

### Como Executar

1. **Clonar o Repositó rio**

   ```bash
   git clone https://github.com/ProgAttack/storeshop.git
   cd storeshop

## Instalar Dependências
```bash
 flutter pub get

## Executar o Aplicativo
```bash
 flutter run
Isso iniciará o aplicativo Flutter no seu emulador ou dispositivo conectado.

### Funcionalidades
 - Login: Permite que o usuário faça login utilizando um email e senha.
 - Listagem de Produtos: Exibe uma lista de produtos disponíveis na loja.
 - Carrinho de Compras: Permite adicionar produtos ao carrinho e finalizar a compra.


## Backend em NestJS
  ### Pré-requisitos
 - Node.js instalado 
 - NestJS CLI instalado (npm i -g @nestjs/cli)

   
## Como Executar

  ### Instalar Dependências

 -```bash
 npm install
 - Configurar Variáveis de Ambiente

 ## Executar o Servidor
```bash
npm run start

### Funcionalidades
 - Autenticação: JWT é utilizado para autenticar usuários.
 - Endpoints RESTful: Implementa endpoints para listar produtos, gerenciar carrinho de compras, etc.
 - Persistência: Utiliza uma base de dados (se configurada) ou armazenamento em memória para manter os dados.
