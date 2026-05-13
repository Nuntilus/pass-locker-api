import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authorizationHeader = req.header('authorization');
    if (authorizationHeader == null) throw new UnauthorizedException();

    const [type, token] = authorizationHeader.split(' ');
    if (type !== 'Bearer' || token == null || token.trim() === '') {
      throw new UnauthorizedException();
    }

    const secret = process.env.JWT_SECRET;
    if (secret == null || secret.trim() === '') {
      throw new UnauthorizedException();
    }

    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
