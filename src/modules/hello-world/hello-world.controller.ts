import { HelloWorldService } from '@/modules/hello-world/hello-world.service';
import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'hello-world',
})
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Get()
  greet(): string {
    return this.helloWorldService.getGreeting();
  }
}
