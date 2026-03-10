import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const CACHE_TTL_MS = 30_000; // 30 seconds

@Injectable()
export class SettingsService {
  private cache: Record<string, string> | null = null;
  private cacheExpiry = 0;

  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Record<string, string>> {
    if (this.cache && Date.now() < this.cacheExpiry) {
      return this.cache;
    }
    const rows = await this.prisma.siteSetting.findMany();
    const result: Record<string, string> = {};
    for (const row of rows) {
      result[row.key] = row.value;
    }
    this.cache = result;
    this.cacheExpiry = Date.now() + CACHE_TTL_MS;
    return result;
  }

  async get(key: string): Promise<string | null> {
    const all = await this.getAll();
    return all[key] ?? null;
  }

  async set(
    key: string,
    value: string,
  ): Promise<{ key: string; value: string }> {
    const row = await this.prisma.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
    this.invalidateCache();
    return { key: row.key, value: row.value };
  }

  /** Clear cache so next getAll() re-fetches from DB */
  invalidateCache(): void {
    this.cache = null;
    this.cacheExpiry = 0;
  }
}
