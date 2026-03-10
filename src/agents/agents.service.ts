import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

const SELECT_FIELDS = {
  id: true,
  name: true,
  email: true,
  phone: true,
  avatarUrl: true,
  role: true,
  isActive: true,
  createdAt: true,
} as const;

@Injectable()
export class AgentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.agent.findMany({
      select: SELECT_FIELDS,
      orderBy: { name: 'asc' },
    });
  }

  async findPublic() {
    return this.prisma.agent.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const agent = await this.prisma.agent.findUnique({
      where: { id },
      select: SELECT_FIELDS,
    });
    if (!agent) throw new NotFoundException('Agent not found');
    return agent;
  }

  async create(dto: CreateAgentDto) {
    return this.prisma.agent.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone || null,
        avatarUrl: dto.avatarUrl || null,
        role: dto.role || 'agent',
        isActive: dto.isActive ?? true,
        passwordHash: dto.password ? await bcrypt.hash(dto.password, 10) : undefined,
      },
      select: SELECT_FIELDS,
    });
  }

  async update(id: string, dto: UpdateAgentDto) {
    await this.findOne(id);

    return this.prisma.agent.update({
      where: { id },
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone !== undefined ? dto.phone || null : undefined,
        avatarUrl: dto.avatarUrl !== undefined ? dto.avatarUrl || null : undefined,
        role: dto.role,
        isActive: dto.isActive,
        passwordHash: dto.password ? await bcrypt.hash(dto.password, 10) : undefined,
      },
      select: SELECT_FIELDS,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.agent.delete({ where: { id } });
  }
}
