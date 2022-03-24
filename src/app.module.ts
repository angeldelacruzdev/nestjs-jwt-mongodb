import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [DataBaseModule, AuthModule, UsersModule, CatsModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
