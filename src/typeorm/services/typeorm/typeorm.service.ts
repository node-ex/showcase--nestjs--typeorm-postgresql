import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeormService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async executeRawQuery() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result: any[] = await this.dataSource.query('SELECT 1 as result');

    return result[0] as { result: number };
  }
}
