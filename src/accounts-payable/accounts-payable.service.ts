import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountsPayableDto } from './dto/create-accounts-payable.dto';
import { UpdateAccountsPayableDto } from './dto/update-accounts-payable.dto';

import {
  AccountsPayable,
  AccountsPayableDocument,
} from './schema/accounts-payable.schema';

@Injectable()
export class AccountsPayableService {
  constructor(
    @InjectModel(AccountsPayable.name)
    private accountsPayableModel: Model<AccountsPayableDocument>,
  ) {}

  async create(createAccountsPayableDto: CreateAccountsPayableDto) {
    const createdAccountsPayable = new this.accountsPayableModel(
      createAccountsPayableDto,
    );
    return createdAccountsPayable.save();
  }

  async findAll() {
    return await this.accountsPayableModel.find({});
  }

  async findOne(id: string) {
    return await this.accountsPayableModel.findById(id);
  }

  async update(id: string, updateAccountsPayableDto: UpdateAccountsPayableDto) {
    return await this.accountsPayableModel.updateMany(
      { _id: id },
      updateAccountsPayableDto,
    );
  }

  async remove(id: string) {
    return await this.accountsPayableModel.deleteMany({ _id: id });
  }
}
