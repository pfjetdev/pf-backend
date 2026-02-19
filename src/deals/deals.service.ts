import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  async findAll(all = false) {
    return this.prisma.deal.findMany({
      where: all ? {} : { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findBySlug(slug: string) {
    const deal = await this.prisma.deal.findUnique({ where: { slug } });
    if (!deal) {
      throw new NotFoundException(`Deal with slug "${slug}" not found`);
    }
    return deal;
  }

  async findOne(id: string) {
    const deal = await this.prisma.deal.findUnique({ where: { id } });
    if (!deal) {
      throw new NotFoundException(`Deal with id ${id} not found`);
    }
    return deal;
  }

  async create(dto: CreateDealDto) {
    return this.prisma.deal.create({
      data: {
        slug: dto.slug,
        origin: dto.origin,
        originCode: dto.originCode,
        destination: dto.destination,
        destinationCode: dto.destinationCode,
        countryCode: dto.countryCode,
        cabinClass: dto.cabinClass,
        publicFare: dto.publicFare,
        pfPrice: dto.pfPrice,
        imageUrl: dto.imageUrl,
        themeColor: dto.themeColor,
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
        startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
      },
    });
  }

  async update(id: string, dto: UpdateDealDto) {
    await this.findOne(id);
    return this.prisma.deal.update({
      where: { id },
      data: {
        slug: dto.slug,
        origin: dto.origin,
        originCode: dto.originCode,
        destination: dto.destination,
        destinationCode: dto.destinationCode,
        countryCode: dto.countryCode,
        cabinClass: dto.cabinClass,
        publicFare: dto.publicFare,
        pfPrice: dto.pfPrice,
        imageUrl: dto.imageUrl,
        themeColor: dto.themeColor,
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
        startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.deal.delete({ where: { id } });
  }
}
