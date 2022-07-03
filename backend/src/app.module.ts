import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    // MikroOrmModule.forRoot({
    //   type: 'mariadb',
    //   entities: ['dist/**/*.entity.js'],
    //   entitiesTs: ['src/**/*.entity.ts'],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
