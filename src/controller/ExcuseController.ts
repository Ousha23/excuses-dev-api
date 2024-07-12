import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateExcuseUseCase } from 'src/useCase/createExcuse/createExcuseUseCase';
import { GetAllExcusesUseCase } from 'src/useCase/getAllExcuses/getAllExcusesUseCase';
import { GetExcuseByHttpCodeUseCase } from 'src/useCase/getExcuseByHttpCode/getExcuseByHttpCodeUseCase';

@Controller('excuses')
export class ExcusesController {
  constructor(
    private readonly getAllExcusesUseCase: GetAllExcusesUseCase,
    private readonly createExcuseUseCase: CreateExcuseUseCase,
    private readonly getExcuseByHttpCodeUseCase: GetExcuseByHttpCodeUseCase,
  ) {}

  @Get()
  async getAllExcuses() {
    return await this.getAllExcusesUseCase.execute();
  }

  @Get('/:http_code')
  async getExcuseByHttpCode(@Param('http_code') http_code: string) {
    const httpCodeNumber = parseInt(http_code, 10);
    return await this.getExcuseByHttpCodeUseCase.execute(httpCodeNumber);
  }

  @Post()
  async createExcuse(
    @Body() body: { httpCode: number; tag: string; message: string },
  ) {
    return await this.createExcuseUseCase.execute(
      body.httpCode,
      body.tag,
      body.message,
    );
  }
}
