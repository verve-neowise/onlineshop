import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { } from './storage/database'

const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
}
bootstrap();
