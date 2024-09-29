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

  async updateUser(
    id: number,
    nickname?: string,
    profileImage?: string,
    maxHealthPoint?: number,
    level?: number,
  ) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    user.nickname = nickname ? nickname : user.nickname;
    user.profileImage = profileImage ? profileImage : user.profileImage;
    user.maxHealthPoint = maxHealthPoint ? maxHealthPoint : user.maxHealthPoint;
    user.level = level ? level : user.level;

    return await this.usersRepository.save(user);
  }
}
