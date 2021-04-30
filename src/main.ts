import { indexModule } from './index.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(indexModule);
  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen(3000);
}
bootstrap();
