import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { EntriesController } from './entries.controller';

import { InventoryService } from './../inventory/inventory.service';
import { InventoryModule } from './../inventory/inventory.module';
import { Entry, EntrySchema } from './schema/entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
    InventoryModule,
  ],
  exports: [MongooseModule, EntriesService],
  controllers: [EntriesController],
  providers: [EntriesService, InventoryService],
})
export class EntriesModule {}
