import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { LoginPayload } from './payloads/login.payload';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }
  async login(credentials: LoginPayload) {
    const user = await this.userService.findByUsername(credentials.username);

    if (user == null) throw new UnauthorizedException();
  
    console.log('loaded env vars: ',process.env)
    console.log('jwt secret: ', process.env.JWT_SECRET)
    const token: string = jwt.sign({ sub: user.uuid }, process.env.JWT_SECRET);

    return {
      acccessToken: token,
      sub: user.uuid,
      type: 'Bearer',
    };
  }
}
