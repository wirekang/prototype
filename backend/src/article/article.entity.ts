import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Article {
  @PrimaryKey()
  id: number;
}
