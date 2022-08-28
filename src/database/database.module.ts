import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://peni:chupalasuave73@cluster0.vtqbc.mongodb.net/test')],
})
export class DataBaseModule {}
