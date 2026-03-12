import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Res,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { BeatMyPriceService } from './beat-my-price.service';
import { CreateBeatMyPriceDto } from './dto/create-beat-my-price.dto';
import { UpdateBeatMyPriceDto } from './dto/update-beat-my-price.dto';
import { BulkStatusDto, BulkAssignDto, BulkIdsDto } from '../common/dto/bulk-operations.dto';
import { Throttle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

function safeInt(val?: string): number | undefined {
  if (!val) return undefined;
  const n = parseInt(val, 10);
  return isNaN(n) ? undefined : n;
}

@Controller('beat-my-price')
export class BeatMyPriceController {
  constructor(private readonly beatMyPriceService: BeatMyPriceService) {}

  // Public — used by frontend form (stricter rate limit: 3 per 60s per IP)
  @Throttle({ short: { ttl: 60000, limit: 3 } })
  @Post()
  create(@Body() dto: CreateBeatMyPriceDto) {
    return this.beatMyPriceService.create(dto);
  }

  // ── Static routes BEFORE :id ──

  @UseGuards(JwtAuthGuard)
  @Get('export/csv')
  async exportCsv(
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
    @Query('agentId') agentId?: string,
    @Res() res?: Response,
  ) {
    const csv = await this.beatMyPriceService.exportCsv({
      status, search, sortBy, sortOrder, dateFrom, dateTo, agentId,
    });
    res!.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res!.setHeader('Content-Disposition', 'attachment; filename=beat-my-price.csv');
    res!.send(csv);
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats/summary')
  getStats() {
    return this.beatMyPriceService.getStats();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('bulk/status')
  bulkUpdateStatus(@Body() dto: BulkStatusDto) {
    return this.beatMyPriceService.bulkUpdateStatus(dto.ids, dto.status);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('bulk/assign')
  bulkAssignAgent(@Body() dto: BulkAssignDto) {
    return this.beatMyPriceService.bulkAssignAgent(dto.ids, dto.agentId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('bulk/delete')
  bulkDelete(@Body() dto: BulkIdsDto) {
    return this.beatMyPriceService.bulkDelete(dto.ids);
  }

  // ── Paginated list ──

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
    @Query('agentId') agentId?: string,
  ) {
    return this.beatMyPriceService.findAll({
      page: safeInt(page),
      limit: safeInt(limit),
      status, search: search?.slice(0, 500), sortBy, sortOrder, dateFrom, dateTo, agentId,
    });
  }

  // ── Single item CRUD ──

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.beatMyPriceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateBeatMyPriceDto) {
    return this.beatMyPriceService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.beatMyPriceService.remove(id);
  }
}
