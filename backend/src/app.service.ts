import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getHello(): string {
    return `NODE_ENV: ${
      process.env.NODE_ENV
    }<br/>config.env:${this.config.getString('env')}`;
  }
}
