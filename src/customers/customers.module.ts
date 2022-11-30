
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';

import { BusinessModule } from './../business/business.module';
import { BusinessService } from './../business/business.service';

import { CustomersController } from './customers.controller';
import { Customer, CustomerSchema } from './schema/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
    BusinessModule,
  ],
  exports: [MongooseModule, CustomersService],
  controllers: [CustomersController],
  providers: [CustomersService, BusinessService],
})
export class CustomersModule {}
