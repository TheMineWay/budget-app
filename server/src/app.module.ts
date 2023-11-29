import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard, ApiKeysModule } from 'nestjs-api-keys';

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
  ],
  providers: [
    {
      useValue: APP_GUARD,
      provide: ApiKeyGuard({ permissions: ['use'] }),
    },
  ],
})
export class AppModule {}
