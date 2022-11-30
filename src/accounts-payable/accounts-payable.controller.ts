import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountsPayableService } from './accounts-payable.service';
import { CreateAccountsPayableDto } from './dto/create-accounts-payable.dto';
import { UpdateAccountsPayableDto } from './dto/update-accounts-payable.dto';

@Controller('accounts-payable')
export class AccountsPayableController {
  constructor(
    private readonly accountsPayableService: AccountsPayableService,
  ) {}

  @Post()
  async create(@Body() createAccountsPayableDto: CreateAccountsPayableDto) {
    return await this.accountsPayableService.create(createAccountsPayableDto);
  }

  @Get()
  findAll() {
    return this.accountsPayableService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.accountsPayableService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccountsPayableDto: UpdateAccountsPayableDto,
  ) {
    return await this.accountsPayableService.update(
      id,
      updateAccountsPayableDto,
    );
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.accountsPayableService.remove(id);
  }
}
