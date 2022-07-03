import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}
  @Get()
  async findAll(): Promise<string> {
    const r = await this.service.findAll();
    return `${JSON.stringify(r)}`;
  }

  @Get('test')
  async add(): Promise<string> {
    await this.service.create({ aaaa: 3, title: 'ff' });
    return 'ss';
  }
}
