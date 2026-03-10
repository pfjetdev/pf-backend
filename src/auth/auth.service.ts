import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private validatePasswordStrength(password: string) {
    if (password.length < 8) {
      throw new UnauthorizedException('Password must be at least 8 characters');
    }
    if (!/[a-z]/.test(password)) {
      throw new UnauthorizedException('Password must contain a lowercase letter');
    }
    if (!/[A-Z]/.test(password)) {
      throw new UnauthorizedException('Password must contain an uppercase letter');
    }
    if (!/\d/.test(password)) {
      throw new UnauthorizedException('Password must contain a number');
    }
  }

  async validateUser(email: string, password: string) {
    const agent = await this.prisma.agent.findUnique({ where: { email } });
    if (!agent || !agent.passwordHash || !agent.isActive) {
      return null;
    }
    const valid = await bcrypt.compare(password, agent.passwordHash);
    if (!valid) return null;
    const { passwordHash: _, ...result } = agent;
    return result;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatarUrl: user.avatarUrl,
      },
    };
  }

  async setup(email: string, password: string, name: string) {
    if (!email || !password || !name) {
      throw new UnauthorizedException('email, password and name are required');
    }

    const adminCount = await this.prisma.agent.count({ where: { role: 'admin' } });
    if (adminCount > 0) {
      throw new UnauthorizedException('Admin already exists. Use /auth/login');
    }

    this.validatePasswordStrength(password);

    const hash = await bcrypt.hash(password, 12);
    const agent = await this.prisma.agent.create({
      data: { email, name, passwordHash: hash, role: 'admin', isActive: true },
    });

    const payload = { sub: agent.id, email: agent.email, role: agent.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: agent.id, name: agent.name, email: agent.email, role: agent.role },
    };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const agent = await this.prisma.agent.findUnique({ where: { id: userId } });
    if (!agent || !agent.passwordHash) {
      throw new UnauthorizedException();
    }

    const valid = await bcrypt.compare(currentPassword, agent.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    this.validatePasswordStrength(newPassword);

    const hash = await bcrypt.hash(newPassword, 12);
    await this.prisma.agent.update({
      where: { id: userId },
      data: { passwordHash: hash },
    });

    return { message: 'Password changed successfully' };
  }

  async getProfile(userId: string) {
    const agent = await this.prisma.agent.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        phone: true,
        isActive: true,
      },
    });
    if (!agent || !agent.isActive) {
      throw new UnauthorizedException();
    }
    return agent;
  }
}
