import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema, User } from './../schemas/user.schema';
import { UserRepository } from './../repository/user.repostory';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule, UserRepository, UsersService],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {


  

}
