import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PasswordModule } from './password/password.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, PasswordModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
