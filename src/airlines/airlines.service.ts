import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';

@Injectable()
export class AirlinesService {
  constructor(private prisma: PrismaService) {}

  /** Normalize routeCodes: accept string "DXB,AUH" or stуring[] */
  private normalizeRouteCodes(codes: string[] | string | undefined): string[] | undefined {
    if (codes === undefined) return undefined;
    if (typeof codes === 'string') {
      return codes.split(',').map(c => c.trim()).filter(Boolean);
    }
    return codes;
  }

  async findAll(all = false) {
    return this.prisma.airline.findMany({
      where: all ? {} : { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(id: string) {
    const airline = await this.prisma.airline.findUnique({ where: { id } });
    if (!airline) {
      throw new NotFoundException(`Airline with id ${id} not found`);
    }
    return airline;
  }

  async findBySlug(slug: string) {
    const airline = await this.prisma.airline.findUnique({ where: { slug } });
    if (!airline) {
      throw new NotFoundException(`Airline with slug "${slug}" not found`);
    }
    return airline;
  }

  async create(dto: CreateAirlineDto) {
    return this.prisma.airline.create({
      data: {
        name: dto.name,
        slug: dto.slug ?? dto.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        logoUrl: dto.logoUrl,
        imageUrl: dto.imageUrl,
        featuredRoute: dto.featuredRoute,
        savingPercent: dto.savingPercent,
        iataCode: dto.iataCode,
        description: dto.description,
        alliance: dto.alliance,
        hubCity: dto.hubCity,
        routeCodes: this.normalizeRouteCodes(dto.routeCodes) ?? [],
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
      },
    });
  }

  async update(id: string, dto: UpdateAirlineDto) {
    await this.findOne(id);
    return this.prisma.airline.update({
      where: { id },
      data: {
        name: dto.name,
        slug: dto.slug,
        logoUrl: dto.logoUrl,
        imageUrl: dto.imageUrl,
        featuredRoute: dto.featuredRoute,
        savingPercent: dto.savingPercent,
        iataCode: dto.iataCode,
        description: dto.description,
        alliance: dto.alliance,
        hubCity: dto.hubCity,
        routeCodes: this.normalizeRouteCodes(dto.routeCodes),
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.airline.delete({ where: { id } });
  }
}
