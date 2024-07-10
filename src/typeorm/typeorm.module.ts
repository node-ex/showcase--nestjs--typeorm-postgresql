import { Module } from '@nestjs/common';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './services/typeorm/typeorm.service';

@Module({
  controllers: [TypeormController],
  providers: [TypeormService]
})
export class TypeormModule {}
