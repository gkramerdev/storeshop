import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';
import { CartController } from './cart/cart.controller';
import { ProductController } from './product/product.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'Senha@123#',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [
    AppController,
    CartController,
    ProductController,
    AuthController,
  ],
  providers: [AppService, ProductService, CartService, AuthService],
})
export class AppModule {}
