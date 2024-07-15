import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      email: 'teste',
      password: '123',
    },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<{ accessToken: string }> {
    const payload = { email: user.email, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
