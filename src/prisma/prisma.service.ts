import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, PrismaClientExtends } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient  {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

}
