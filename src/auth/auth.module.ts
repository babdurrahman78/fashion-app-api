import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './Jwt';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
