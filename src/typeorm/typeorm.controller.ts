import { TypeormService } from '@/typeorm/services/typeorm/typeorm.service';
import { Controller, Get } from '@nestjs/common';

@Controller('typeorm')
export class TypeormController {
  constructor(private readonly typeormService: TypeormService) {}

  @Get('raw-query')
  executeRawQuery() {
    return this.typeormService.executeRawQuery();
  }
}
