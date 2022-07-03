import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        return ConfigService.create(
          path.join(
            __dirname,
            '..',
            '..',
            'secrets',
            'out',
            `config.${process.env.MY_ENV}.json`,
          ),
        );
      },
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
