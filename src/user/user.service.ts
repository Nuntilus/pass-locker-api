import { Injectable } from '@nestjs/common';
import { CreateUserPayload } from './payload/create-user.payload';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly database: PrismaService){}
  async create(user: CreateUserPayload) { 
    return this.database.user.create({
      data:{...user}
    })
  }
}
