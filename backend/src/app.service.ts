import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'zzzworld==-asdf' + process.env.NODE_ENV + '....';
  }
}
