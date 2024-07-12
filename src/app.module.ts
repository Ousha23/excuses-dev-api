import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExcusesController } from './controller/ExcuseController';
import { ExcuseRepository } from './repositories/excuseRepository';
import { PrismaService } from './prisma/prismaService';
import { UseCases } from './useCase/useCases';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, ExcusesController],
  providers: [AppService, ExcuseRepository, PrismaService, ...UseCases],
})
export class AppModule {}
