import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})], // import jwt module for hashing and verify token
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // all components that can be used in this module only
})
export class AuthModule {}
