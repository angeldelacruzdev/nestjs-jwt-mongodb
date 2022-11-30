import { Module } from '@nestjs/common';
import { AccountsReceivableService } from './accounts-receivable.service';
import { AccountsReceivableController } from './accounts-receivable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountsReceivable,
  AccountsReceivableSchema,
} from './schema/accounts-receivable.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountsReceivable.name, schema: AccountsReceivableSchema },
    ]),
  ],
  exports: [MongooseModule, AccountsReceivableService],
  controllers: [AccountsReceivableController],
  providers: [AccountsReceivableService],
})
export class AccountsReceivableModule {}
