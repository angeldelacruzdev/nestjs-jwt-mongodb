import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AccountsReceivableService } from './accounts-receivable.service';
import { CreateAccountsReceivableDto } from './dto/create-accounts-receivable.dto';
import { UpdateAccountsReceivableDto } from './dto/update-accounts-receivable.dto';

@Controller('accounts-receivable')
export class AccountsReceivableController {
  constructor(
    private readonly accountsReceivableService: AccountsReceivableService,
  ) {}

  @Post()
  async create(
    @Body() createAccountsReceivableDto: CreateAccountsReceivableDto,
  ) {
    return await this.accountsReceivableService.create(
      createAccountsReceivableDto,
    );
  }

  @Get()
  async findAll() {
    return await this.accountsReceivableService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.accountsReceivableService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountsReceivableDto: UpdateAccountsReceivableDto,
  ) {
    return this.accountsReceivableService.update(
      id,
      updateAccountsReceivableDto,
    );
  }

  @Delete(':id')
 async  remove(@Param('id') id: string) {
    return this.accountsReceivableService.remove(id);
  }
}
