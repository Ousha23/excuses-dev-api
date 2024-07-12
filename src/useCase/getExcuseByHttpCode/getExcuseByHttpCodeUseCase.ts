import { Injectable, NotFoundException } from '@nestjs/common';
import { Excuse } from 'src/entities/excuseEntity';
import { ExcuseRepository } from 'src/repositories/excuseRepository';

@Injectable()
export class GetExcuseByHttpCodeUseCase {
  constructor(private readonly excuseRepository: ExcuseRepository) {}

  async execute(httpCode): Promise<Excuse> {
    const excuse = await this.excuseRepository.findOne(httpCode);
    if (!excuse) {
      throw new NotFoundException('http_code not found');
    }
    return excuse;
  }
}
