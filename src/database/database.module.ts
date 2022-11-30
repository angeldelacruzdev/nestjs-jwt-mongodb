import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://peni:chupalasuave73@cluster0.vtqbc.mongodb.net/contables',
      }),
    }),
  ],
})
export class DataBaseModule {}
