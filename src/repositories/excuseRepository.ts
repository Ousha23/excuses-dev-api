import { Injectable } from '@nestjs/common';
import { Excuse } from 'src/entities/excuseEntity';
import { PrismaService } from 'src/prisma/prismaService';

@Injectable()
export class ExcuseRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Excuse[]> {
    return await this.prisma.excuse.findMany();
  }

  async findOne(httpCode: number): Promise<Excuse | null> {
    return await this.prisma.excuse.findFirst({
      where: {
        httpCode: httpCode,
      },
    });
  }

  async create(excuse: Excuse): Promise<Excuse> {
    return await this.prisma.excuse.create({
      data: excuse,
    });
  }
}
