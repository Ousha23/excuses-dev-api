import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  // Configuration CORS
  app.enableCors({
    origin: '*', // Autorise seulement ce domaine à accéder à l'API
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // Entêtes HTTP autorisés
    credentials: true, // Active le partage des cookies et des en-têtes d'autorisation pour les requêtes cross-origin
  });

  await app.listen(3000);
  logger.log('Server is running on http://localhost:3000');
}
bootstrap();
