import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(user: User): Promise<User> {
    if (user) {
      // Update existing user
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          name: name || email.split('@')[0],
          updatedAt: new Date(),
        },
      });
    } else {
      // Create new user if not found
      user = await this.prisma.user.create({
        data: {
          email,
          name: name || email.split('@')[0],
          authId: sub,
          updatedAt: new Date(),
        },
      });
    }

    return user;
  }

  async getProfile(
    userId: string,
  ): Promise<User & { workspaces: { workspace: User }[] }> {
    return this.prisma.user.findFirst({
      where: { authId: userId },
      include: {
        workspaces: {
          include: {
            workspace: true,
          },
        },
      },
    });
  }
}
