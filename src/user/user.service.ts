import { Injectable } from '@nestjs/common';
import { CreateUserPayload } from './payload/create-user.payload';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly database: PrismaService) { }

  /**
   * Creates the given user in the Database
   * @param user  The user to create
   * @returns     THe created user
   */
  async create(user: CreateUserPayload) {
    return this.database.user.create({
      data: user,
    });
  }

  /**
   * Finds the user with the given uuid 
   * @param uuid  The uuid to fid the user with
   * @returns The found user
   */
  findByUuid(uuid: string) {
    return this.database.user.findUnique({ where: { uuid } });
  }

  /**
   * Lists al user in the database
   * @returns All found users
   */
  list() {
    return this.database.user.findMany();
  }
}
