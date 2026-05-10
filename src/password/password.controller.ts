import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PasswordService } from './password.service';
import { CreatePasswordPaylaod } from './payload/create-password.payload';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post()
  async createPassword(@Body() password: CreatePasswordPaylaod){
    return this.passwordService.create(password)  
  }

  @Get(':uuid')
  async list(@Param('uuid') userUuid: string){
    return this.passwordService.listByUserUuid(userUuid)
  }
}
