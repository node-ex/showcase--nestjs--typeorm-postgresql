import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  await ConfigModule.envVariablesLoaded;
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  console.log('>>>', configService.get('core.globalSecret'));

  await app.listen(3000);
}

void bootstrap();
