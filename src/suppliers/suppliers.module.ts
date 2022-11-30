import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { Supplier, SupplierSchema } from './schema/supplier.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
    ]),
  ],
  exports: [MongooseModule, SuppliersService],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
