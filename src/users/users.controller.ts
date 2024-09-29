import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body('nickname') nickname: string,
    @Body('profileImage') profileImage: string,
    @Body('maxHealthPoint') maxHealthPoint: string,
    @Body('level') level: string,
  ) {
    return this.usersService.updateUserById(
      +id,
      nickname,
      profileImage,
      +maxHealthPoint,
      +level,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(+id);
  }
}
