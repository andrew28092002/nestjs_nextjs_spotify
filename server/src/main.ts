import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://client:3000']
  })
  await app.listen(PORT, () => console.log('Server started on PORT: ' + PORT));
}
    
bootstrap();
