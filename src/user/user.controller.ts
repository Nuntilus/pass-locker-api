import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserPayload } from './payload/create-user.payload';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserPayload) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async listUser(){
    return this.userService.list()
  }
}
