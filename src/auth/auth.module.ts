import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './../users/users.module';
import { RtStrategiest, AtStrategiest } from './strategies';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule.register({}), UsersModule],

  providers: [AuthService, AtStrategiest, RtStrategiest],
  controllers: [AuthController],
})
export class AuthModule {}
