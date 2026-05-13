import { Body, Controller, Post } from '@nestjs/common';
import { LoginPayload } from './payloads/login.payload';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}
  @Post('login')
  async login(@Body() credentials: LoginPayload){
   return this.authService.login(credentials) 
  }
}
