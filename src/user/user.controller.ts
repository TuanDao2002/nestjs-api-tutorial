import {
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard) // use guard which uses JwtStrategy from provider of auth module
@Controller('users')
export class UserController {
  @Get('me')
  // add a reusable decorator to the controller route
  getMe(@GetUser() user: User) {
    // the user object is already attached to request object from strategy named "jwt" (JwtGuard)
    return user;
  }

  @Patch()
  editUser() {}
}
