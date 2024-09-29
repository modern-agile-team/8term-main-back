import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Post()
  addUser(
    @Body('nickname') nickname: string,
    @Body('profileImage') profileImage: string,
    @Body('maxHealthPoint') maxHealthPoint: string,
    @Body('level') level: string,
  ) {
    return this.usersService.addUser(
      nickname,
      profileImage,
      +maxHealthPoint,
      +level,
    );
  }
}
