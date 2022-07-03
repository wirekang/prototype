import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: EntityRepository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    const res = await this.articleRepository.findAll();
    return res;
  }

  async create(dto: CreateArticleDto) {
    const article = this.articleRepository.create(dto);
    await this.articleRepository.persistAndFlush(article);
  }
}
