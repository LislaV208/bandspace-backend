import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request & { user: any }) {
    const user = req.user;
    return this.authService.getProfile(user.sub);
  }

  @Get('test')
  @UseGuards(JwtAuthGuard)
  async testAuth() {
    return { message: 'You are authenticated!' };
  }
}
