import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class ConfigService {
  constructor(private data: Record<string, any>) {}

  static async create(path: string): Promise<ConfigService> {
    const buffer = await fs.readFile(path, { encoding: 'utf-8' });
    const data = JSON.parse(buffer);
    if (typeof data !== 'object') {
      throw Error('Config is not object');
    }

    return new ConfigService(data);
  }

  private get(key: string, type: string): any {
    const v = this.data[key];
    if (v === undefined) {
      throw Error(`Config not found: ${key}`);
    }

    if (typeof v !== type) {
      throw Error(`Type mismatch expected: ${type} actual:${typeof v}(${v})`);
    }

    return v;
  }

  getString(key: string): string {
    return this.get(key, 'string');
  }

  getNumber(key: string): string {
    return this.get(key, 'number');
  }

  getBoolean(key: string): boolean {
    return this.get(key, 'boolean');
  }

  getObject(key: string): any {
    return this.get(key, 'object');
  }
}
