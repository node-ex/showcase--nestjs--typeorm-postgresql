import { HelloWorldController } from '@/modules/hello-world/hello-world.controller';
import { HelloWorldService } from '@/modules/hello-world/hello-world.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldService],
})
export class HelloWorldModule {}
