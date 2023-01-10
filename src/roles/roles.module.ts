import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role, RoleSchema } from './schema/role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  exports: [MongooseModule, RolesService],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
