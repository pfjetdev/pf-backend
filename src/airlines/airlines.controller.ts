import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { revalidateTag } from '../common/revalidate';

@Controller('airlines')
export class AirlinesController {
  constructor(private readonly airlinesService: AirlinesService) {}

  @Get()
  findAll(@Query('all') all?: string) {
    return this.airlinesService.findAll(all === 'true');
  }

  @Get('by-slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.airlinesService.findBySlug(slug);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.airlinesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body() dto: CreateAirlineDto) {
    const result = await this.airlinesService.create(dto);
    revalidateTag('airlines');
    revalidateTag('catalog');
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateAirlineDto) {
    const result = await this.airlinesService.update(id, dto);
    revalidateTag('airlines');
    revalidateTag('catalog');
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.airlinesService.remove(id);
    revalidateTag('airlines');
    revalidateTag('catalog');
    return result;
  }
}
