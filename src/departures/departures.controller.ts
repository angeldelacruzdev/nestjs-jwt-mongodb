import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeparturesService } from './departures.service';
import { CreateDepartureDto } from './dto/create-departure.dto';
import { UpdateDepartureDto } from './dto/update-departure.dto';

@Controller('departures')
export class DeparturesController {
  constructor(private readonly departuresService: DeparturesService) {}

  @Post()
  async create(@Body() createDepartureDto: CreateDepartureDto) {
    return await this.departuresService.create(createDepartureDto);
  }

  @Get()
  findAll() {
    return this.departuresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.departuresService.findOne(id);
  }

  @Get('data/invoice/:id')
  async findOneByInvoiceNumber(@Param('id') id: string) {
    return await this.departuresService.findOneByInvoiceNumber(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartureDto: UpdateDepartureDto,
  ) {
    return this.departuresService.update(+id, updateDepartureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departuresService.remove(+id);
  }
}
