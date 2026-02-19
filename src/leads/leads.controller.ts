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
} from '@nestjs/common';
import { Response } from 'express';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  // Public — used by frontend forms
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
    @Res() res?: Response,
  ) {
    const csv = await this.leadsService.exportCsv({
      status, source, search, sortBy, sortOrder,
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
  bulkUpdateStatus(@Body() dto: { ids: string[]; status: string }) {
    return this.leadsService.bulkUpdateStatus(dto.ids, dto.status);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('bulk/assign')
  bulkAssignAgent(@Body() dto: { ids: string[]; agentId: string | null }) {
    return this.leadsService.bulkAssignAgent(dto.ids, dto.agentId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('bulk/delete')
  bulkDelete(@Body() dto: { ids: string[] }) {
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
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      status, source, search, sortBy, sortOrder,
      dateFrom, dateTo, cabinClass, agentId,
    });
  }

  // ── Single lead CRUD ──

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLeadDto) {
    return this.leadsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(id);
  }
}
