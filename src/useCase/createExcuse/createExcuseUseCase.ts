import { Injectable } from '@nestjs/common';
import { Excuse } from 'src/entities/excuseEntity';
import { ExcuseRepository } from 'src/repositories/excuseRepository';

@Injectable()
export class CreateExcuseUseCase {
  constructor(private readonly excuseRepository: ExcuseRepository) {}

  async execute(
    httpCode: number,
    tag: string,
    message: string,
  ): Promise<Excuse> {
    const excuse = new Excuse();
    excuse.httpCode = httpCode;
    excuse.tag = tag;
    excuse.message = message;
    return this.excuseRepository.create(excuse);
  }
}
