import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Business, BusinessSchema } from './schema/business.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  exports: [MongooseModule, BusinessService],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
