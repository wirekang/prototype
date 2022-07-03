import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        let env = process.env.MY_ENV;
        if (process.env.NODE_ENV === 'test') {
          env = 'test';
        }

        return ConfigService.create(
          path.join(
            __dirname,
            '..',
            '..',
            'secrets',
            'out',
            `config.${env}.json`,
          ),
        );
      },
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
