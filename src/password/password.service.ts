import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePasswordPaylaod } from './payload/create-password.payload';
import { PrismaService } from 'src/prisma/prisma.service';
import { Password } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PasswordService {
  constructor(private readonly database:PrismaService, private userService: UserService){}

  /**
   * Creates a Password in the Database
   * @param password  The password to create
   * @returns         The created password
   */
  async create(password: CreatePasswordPaylaod) : Promise<Password>{ 
    const user = this.userService.findByUuid(password.userUuid) 
    if(user == null)
      throw new NotFoundException("User not found")

    return this.database.password.create({data: {...password}})
  }

  /**
   * Lists al password owned by a user
   * @param userUuid  The uuid of the user requesting
   * @returns the found passwords
   */
  async listByUserUuid(userUuid: string){
    return this.database.password.findMany({where: {userUuid}})
  }
}
