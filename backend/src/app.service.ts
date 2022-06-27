import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '333333 ' + process.env.NODE_ENV + '....';
  }
}
