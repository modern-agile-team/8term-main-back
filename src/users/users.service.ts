import { Injectable } from '@nestjs/common';
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
    return await this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getAllUsers2() {
    return await this.usersRepository.find();
  }

  async getAllUsers3() {
    return await this.usersRepository.find();
  }
}
