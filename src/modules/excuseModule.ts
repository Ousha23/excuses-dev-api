import { Module } from '@nestjs/common';
import { ExcusesController } from 'src/controller/ExcuseController';
import { PrismaService } from 'src/prisma/prismaService';
import { ExcuseRepository } from 'src/repositories/excuseRepository';
import { CreateExcuseUseCase } from 'src/useCase/createExcuse/createExcuseUseCase';
import { GetAllExcusesUseCase } from 'src/useCase/getAllExcuses/getAllExcusesUseCase';

@Module({
  controllers: [ExcusesController],
  providers: [
    PrismaService,
    ExcuseRepository,
    GetAllExcusesUseCase,
    CreateExcuseUseCase,
  ],
})
export class ExcusesModule {}
