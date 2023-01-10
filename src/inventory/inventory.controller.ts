import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller({ path: 'inventory', version: '1.0' })
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  async create(@Body() createInventoryDto: CreateInventoryDto) {
    return await this.inventoryService.create(createInventoryDto);
  }

  @Get()
  async findAll(@Query() query: { q: string }) {
    return await this.inventoryService.findAll(query.q);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.inventoryService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return await this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.inventoryService.remove(id);
  }
}
