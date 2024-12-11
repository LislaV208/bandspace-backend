import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('test')
export class TestController {
  // Public endpoints (no auth required)
  @Get('public')
  getPublic() {
    return {
      message: 'This is a public endpoint',
      timestamp: new Date().toISOString(),
    };
  }

  @Post('public/echo')
  postPublicEcho(@Body() body: any) {
    return {
      message: 'Echo from public endpoint',
      receivedData: body,
      timestamp: new Date().toISOString(),
    };
  }

  // Protected endpoints (auth required)
  @Get('protected')
  @UseGuards(JwtAuthGuard)
  getProtected(@Req() req: Request & { user: any }) {
    const user = req.user; // Access the user property
    return {
      message: 'This is a protected endpoint',
      userInfo: {
        sub: user.sub,
        email: user.email,
      },
      timestamp: new Date().toISOString(),
    };
  }

  @Post('protected/echo')
  @UseGuards(JwtAuthGuard)
  postProtectedEcho(@Body() body: any, @Req() req: Request & { user: any }) {
    const user = req.user; // Access the user property
    return {
      message: 'Echo from protected endpoint',
      userInfo: {
        sub: user.sub,
        email: user.email,
      },
      receivedData: body,
      timestamp: new Date().toISOString(),
    };
  }
}
