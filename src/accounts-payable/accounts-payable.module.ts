import { Module } from '@nestjs/common';
import { AccountsPayableService } from './accounts-payable.service';
import { AccountsPayableController } from './accounts-payable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountsPayable,
  AccountsPayableSchema,
} from './schema/accounts-payable.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountsPayable.name, schema: AccountsPayableSchema },
    ]),
  ],
  controllers: [AccountsPayableController],
  providers: [AccountsPayableService],
})
export class AccountsPayableModule {}
