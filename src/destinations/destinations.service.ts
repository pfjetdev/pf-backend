import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { COUNTRY_TO_REGION, getCountryName } from './geo-constants';

@Injectable()
export class DestinationsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Compute destinations from active deals + merge overrides from destinations table.
   * Returns same shape as the old findAll() for backward compatibility.
   */
  async findAll(region?: string, all = false) {
    // 1. Aggregate unique destinations from deals
    const dealAggs = await this.prisma.deal.groupBy({
      by: ['destinationCode', 'destination', 'countryCode'],
      _min: { pfPrice: true },
      where: { isActive: true },
    });

    if (dealAggs.length === 0) return [];

    // Also get one imageUrl per destination (the first deal with an image)
    const dealsWithImages = await this.prisma.deal.findMany({
      where: { isActive: true, imageUrl: { not: null } },
      select: { destinationCode: true, imageUrl: true },
      orderBy: { sortOrder: 'asc' },
    });
    const dealImageMap = new Map<string, string>();
    for (const d of dealsWithImages) {
      if (d.imageUrl && !dealImageMap.has(d.destinationCode)) {
        dealImageMap.set(d.destinationCode, d.imageUrl);
      }
    }

    // 2. Load all existing destination overrides
    const overrides = await this.prisma.destination.findMany();
    const overrideMap = new Map(overrides.map((d) => [d.airportCode, d]));

    // 3. Merge: deal-computed data + overrides
    const results = dealAggs.map((agg) => {
      const ov = overrideMap.get(agg.destinationCode);
      const computedRegion =
        COUNTRY_TO_REGION[agg.countryCode.toUpperCase()] || 'americas';

      return {
        id: ov?.id || agg.destinationCode,
        city: ov?.city || agg.destination,
        country: ov?.country || getCountryName(agg.countryCode),
        countryCode: agg.countryCode.toUpperCase(),
        airportCode: agg.destinationCode,
        imageUrl: ov?.imageUrl || dealImageMap.get(agg.destinationCode) || null,
        fromPrice: agg._min.pfPrice, // always from deals
        region: ov?.region || computedRegion,
        isActive: ov ? ov.isActive : true, // default: show all
        sortOrder: ov?.sortOrder ?? 0,
        createdAt: ov?.createdAt || new Date(),
        updatedAt: ov?.updatedAt || new Date(),
      };
    });

    // 4. Filter
    let filtered = results;
    if (!all) {
      filtered = filtered.filter((d) => d.isActive);
    }
    if (region) {
      filtered = filtered.filter((d) => d.region === region);
    }

    // 5. Sort by region, then sortOrder
    filtered.sort((a, b) => {
      const rc = a.region.localeCompare(b.region);
      if (rc !== 0) return rc;
      return a.sortOrder - b.sortOrder;
    });

    return filtered;
  }

  /**
   * Returns all unique destinations derived from deals, with override status.
   * Used by admin picker UI.
   */
  async getUniqueFromDeals() {
    const dealAggs = await this.prisma.deal.groupBy({
      by: ['destinationCode', 'destination', 'countryCode'],
      _min: { pfPrice: true },
      _count: { _all: true },
      where: { isActive: true },
    });

    const overrides = await this.prisma.destination.findMany();
    const overrideMap = new Map(overrides.map((d) => [d.airportCode, d]));

    return dealAggs
      .map((agg) => {
        const ov = overrideMap.get(agg.destinationCode);
        return {
          destinationCode: agg.destinationCode,
          city: ov?.city || agg.destination,
          countryCode: agg.countryCode.toUpperCase(),
          country: getCountryName(agg.countryCode),
          region: ov?.region || COUNTRY_TO_REGION[agg.countryCode.toUpperCase()] || 'americas',
          minPrice: agg._min.pfPrice,
          dealCount: agg._count._all,
          isFeatured: !!ov,
          overrideId: ov?.id || null,
          imageUrl: ov?.imageUrl || null,
          sortOrder: ov?.sortOrder ?? 0,
          isActive: ov?.isActive ?? true,
        };
      })
      .sort((a, b) => a.city.localeCompare(b.city));
  }

  async findOne(id: string) {
    const destination = await this.prisma.destination.findUnique({
      where: { id },
    });
    if (!destination) {
      throw new NotFoundException(`Destination with id ${id} not found`);
    }
    return destination;
  }

  async create(dto: CreateDestinationDto) {
    return this.prisma.destination.create({
      data: {
        city: dto.city,
        country: dto.country,
        countryCode: dto.countryCode,
        airportCode: dto.airportCode,
        imageUrl: dto.imageUrl,
        fromPrice: dto.fromPrice,
        region: dto.region,
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
      },
    });
  }

  async update(id: string, dto: UpdateDestinationDto) {
    await this.findOne(id);
    return this.prisma.destination.update({
      where: { id },
      data: {
        city: dto.city,
        country: dto.country,
        countryCode: dto.countryCode,
        airportCode: dto.airportCode,
        imageUrl: dto.imageUrl,
        fromPrice: dto.fromPrice,
        region: dto.region,
        isActive: dto.isActive,
        sortOrder: dto.sortOrder,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.destination.delete({ where: { id } });
  }
}
