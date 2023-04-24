import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Creamos una app de Nest
  const app = await NestFactory.create(AppModule);
  //Esta app se desplegara en el puerto 3000
  await app.listen(3000);
}
bootstrap();
