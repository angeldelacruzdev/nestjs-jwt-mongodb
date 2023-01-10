import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    return await this.entriesService.create(createEntryDto);
  }

  @Get()
  findAll(@Query() query: { q: string }) {
    return this.entriesService.findAll(query.q);
  }

  @Get('code')
  findEntryByProductCode(@Query() query: { c: string }) {
    return this.entriesService.findAll(query.c);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.entriesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEntryDto: UpdateEntryDto,
  ) {
    return await this.entriesService.update(id, updateEntryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.entriesService.remove(id);
  }
}
