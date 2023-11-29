import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiKeyGuard, ApiKeysModule } from 'nestjs-api-keys';
import { TransactionEntity } from './database/entities/transaction.entity';
import { CategoryEntity } from './database/entities/category.entity';
import { RegistryModule } from './api/registry/registry.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    ApiKeysModule.register({
      apiKeys: [
        {
          name: 'PASSWORD',
          keys: [process.env.PASSWORD],
          permissions: ['use'],
        },
      ],
      apiKeyHeader: 'password',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DBHOST,
      port: +process.env.DBPORT,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,
      models: [TransactionEntity, CategoryEntity],
    }),
    RegistryModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard({ permissions: ['use'] }),
    },
  ],
})
export class AppModule {}
