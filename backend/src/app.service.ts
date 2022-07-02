import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return `NODE_ENV: ${process.env.NODE_ENV}<br/>config: ${fs
      .readFileSync('config.json')
      .toString()}`;
  }
}
