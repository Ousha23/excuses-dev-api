import { Injectable } from '@nestjs/common';
import { Excuse } from 'src/entities/excuseEntity';
import { ExcuseRepository } from 'src/repositories/excuseRepository';

@Injectable()
export class GetAllExcusesUseCase {
  constructor(private readonly excuseRepository: ExcuseRepository) {}

  async execute(): Promise<Excuse[]> {
    return this.excuseRepository.findAll();
  }
}
