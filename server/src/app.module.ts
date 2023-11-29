import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiKeyGuard, ApiKeysModule } from 'nestjs-api-keys';
import { TransactionEntity } from './database/entities/transaction.entity';
import { CategoryEntity } from './database/entities/category.entity';

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
  ],
  providers: [
    {
      useValue: APP_GUARD,
      provide: ApiKeyGuard({ permissions: ['use'] }),
    },
  ],
})
export class AppModule {}
