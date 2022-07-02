import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return `\nNODE_ENV: ${process.env.NODE_ENV}<br/>config: <br/>${fs
      .readFileSync('config.json')
      .toString()}`;
  }
}
