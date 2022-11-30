import { Module } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { ContributionsController } from './contributions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contribution, ContributionSchema } from './schema/contribution.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contribution.name, schema: ContributionSchema },
    ]),
  ],
  exports: [MongooseModule, ContributionsService],
  controllers: [ContributionsController],
  providers: [ContributionsService],
})
export class ContributionsModule {}
