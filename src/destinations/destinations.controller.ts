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
import { DestinationsService } from './destinations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { revalidateTag } from '../common/revalidate';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  findAll(@Query('region') region?: string, @Query('all') all?: string) {
    return this.destinationsService.findAll(region, all === 'true');
  }

  @Get('from-deals')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  getFromDeals() {
    return this.destinationsService.getUniqueFromDeals();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.destinationsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body() dto: CreateDestinationDto) {
    const result = await this.destinationsService.create(dto);
    revalidateTag('catalog');
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateDestinationDto) {
    const result = await this.destinationsService.update(id, dto);
    revalidateTag('catalog');
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.destinationsService.remove(id);
    revalidateTag('catalog');
    return result;
  }
}
