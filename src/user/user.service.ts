import { Injectable } from '@nestjs/common';
import { CreateUserPayload } from './payload/create-user.payload';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly database: PrismaService) { }

  async create(user: CreateUserPayload) {
    return this.database.user.create({
      data: user,
    });
  }

  findByUuid(uuid: string) {
    return this.database.user.findUnique({ where: { uuid } });
  }

  list() {
    return this.database.user.findMany();
  }
}
