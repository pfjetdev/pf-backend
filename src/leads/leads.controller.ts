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
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { BulkStatusDto, BulkAssignDto, BulkIdsDto } from '../common/dto/bulk-operations.dto';
import { Throttle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

function safeInt(val?: string): number | undefined {
  if (!val) return undefined;
  const n = parseInt(val, 10);
  return isNaN(n) ? undefined : n;
}

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  // Public — used by frontend forms (stricter rate limit: 3 per 60s per IP)
  @Throttle({ short: { ttl: 60000, limit: 3 } })
  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.leadsService.create(dto);
  }

  // ── Static routes BEFORE :id ──

  @UseGuards(JwtAuthGuard)
  @Get('export/csv')
  async exportCsv(
    @Query('status') status?: string,
    @Query('source') source?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
    @Query('cabinClass') cabinClass?: string,
    @Query('agentId') agentId?: string,
    @Res({ passthrough: true }) res?: Response,
  ) {
    const csv = await this.leadsService.exportCsv({
      status, source, search: search?.slice(0, 500), sortBy, sortOrder,
      dateFrom, dateTo, cabinClass, agentId,
    });
    res!.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res!.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
    res!.send(csv);
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats/summary')
  getStats() {
    return this.leadsService.getStats();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('bulk/status')
  bulkUpdateStatus(@Body() dto: BulkStatusDto) {
    return this.leadsService.bulkUpdateStatus(dto.ids, dto.status);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('bulk/assign')
  bulkAssignAgent(@Body() dto: BulkAssignDto) {
    return this.leadsService.bulkAssignAgent(dto.ids, dto.agentId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('bulk/delete')
  bulkDelete(@Body() dto: BulkIdsDto) {
    return this.leadsService.bulkDelete(dto.ids);
  }

  // ── Paginated list ──

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
    @Query('source') source?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
    @Query('cabinClass') cabinClass?: string,
    @Query('agentId') agentId?: string,
  ) {
    return this.leadsService.findAll({
      page: safeInt(page),
      limit: safeInt(limit),
      status, source, search: search?.slice(0, 500), sortBy, sortOrder,
      dateFrom, dateTo, cabinClass, agentId,
    });
  }

  // ── Single lead CRUD ──

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.leadsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateLeadDto) {
    return this.leadsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.leadsService.remove(id);
  }
}
