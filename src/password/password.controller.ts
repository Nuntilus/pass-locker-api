import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PasswordService } from './password.service';
import { CreatePasswordPaylaod } from './payload/create-password.payload';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('password')
@UseGuards(AuthGuard)
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
