import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

import { Inventory, InventorySchema } from './schema/inventory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
    ]),
  ],
  exports: [MongooseModule, InventoryService],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
