import { TypeormService } from '@/typeorm/services/typeorm/typeorm.service';
import { Controller, Get } from '@nestjs/common';

@Controller('typeorm')
export class TypeormController {
  constructor(private readonly typeormService: TypeormService) {}

  @Get('raw-query')
  executeRawQuery() {
    return this.typeormService.executeRawQuery();
  }

  @Get('coffee/transform')
  transform() {
    return this.typeormService.transform();
  }

  @Get('coffee')
  findAll() {
    return this.typeormService.findAll();
  }
}
