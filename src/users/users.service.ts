import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersModel } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  async getAllUsers() {
    return await this.usersRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async addUser(
    nickname: string,
    profileImage: string,
    maxHealthPoint: number,
    level: number,
  ) {
    const user = this.usersRepository.create({
      nickname,
      profileImage,
      maxHealthPoint,
      level,
    });

    return await this.usersRepository.save(user);
  }
}
