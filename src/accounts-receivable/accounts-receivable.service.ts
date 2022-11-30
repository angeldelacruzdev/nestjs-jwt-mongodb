import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountsReceivableDto } from './dto/create-accounts-receivable.dto';
import { UpdateAccountsReceivableDto } from './dto/update-accounts-receivable.dto';
import {
  AccountsReceivable,
  AccountsReceivableDocument,
} from './schema/accounts-receivable.schema';

@Injectable()
export class AccountsReceivableService {
  constructor(
    @InjectModel(AccountsReceivable.name)
    private accountsReceivableModel: Model<AccountsReceivableDocument>,
  ) {}

  async create(createAccountsReceivableDto: CreateAccountsReceivableDto) {
    const createdAccountsReceivable = new this.accountsReceivableModel(
      createAccountsReceivableDto,
    );
    return createdAccountsReceivable.save();
  }

  async findAll() {
    return await this.accountsReceivableModel.find({});
  }

  async findOne(id: string) {
    return await this.accountsReceivableModel.findById(id);
  }

  async update(
    id: string,
    updateAccountsReceivableDto: UpdateAccountsReceivableDto,
  ) {
    return await this.accountsReceivableModel.updateMany(
      { _id: id },
      updateAccountsReceivableDto,
    );
  }

  async remove(id: string) {
    return await this.accountsReceivableModel.deleteMany({ _id: id });
  }
}
