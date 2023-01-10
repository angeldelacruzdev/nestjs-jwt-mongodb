import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { CustomersModule } from './customers/customers.module';
import { InventoryModule } from './inventory/inventory.module';
import { DeparturesModule } from './departures/departures.module';
import { EntriesModule } from './entries/entries.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AccountsReceivableModule } from './accounts-receivable/accounts-receivable.module';
import { ContributionsModule } from './contributions/contributions.module';
import { AccountsPayableModule } from './accounts-payable/accounts-payable.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataBaseModule,
    AuthModule,
    UsersModule,
    BusinessModule,
    CustomersModule,
    InventoryModule,
    DeparturesModule,
    EntriesModule,
    SuppliersModule,
    AccountsReceivableModule,
    ContributionsModule,
    AccountsPayableModule,
    RolesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
