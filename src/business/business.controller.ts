import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GetCurrentUserId } from './../common/decorators';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Controller({
  path: 'business',
  version: '1.0',
})
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async create(
    @Body() createBusinessDto: CreateBusinessDto,
    @GetCurrentUserId() subId: string,
  ) {
    createBusinessDto.owner = subId;
    return await this.businessService.create(createBusinessDto);
  }

  @Get()
  async findAll() {
    return await this.businessService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.businessService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return await this.businessService.update(id, updateBusinessDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.businessService.remove(id);
  }
}
