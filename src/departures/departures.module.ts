import { Module } from '@nestjs/common';
import { DeparturesService } from './departures.service';
import { DeparturesController } from './departures.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Departure, DepartureSchema } from './schema/departure.schema';

import { InventoryService } from './../inventory/inventory.service';
import { InventoryModule } from './../inventory/inventory.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Departure.name, schema: DepartureSchema },
    ]),
    InventoryModule,
  ],
  exports: [MongooseModule, DeparturesService],
  controllers: [DeparturesController],
  providers: [DeparturesService, InventoryService],
})
export class DeparturesModule {}
