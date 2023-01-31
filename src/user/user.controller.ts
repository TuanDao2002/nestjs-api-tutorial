import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard) // use guard which uses JwtStrategy from provider of auth module
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  // add a reusable decorator to the controller route
  getMe(@GetUser() user: User) {
    // the user object is already attached to request object from strategy named "jwt" (JwtGuard)
    return user;
  }

  @Patch()
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}
