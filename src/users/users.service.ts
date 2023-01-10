import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { UserRepository } from './repository/user.repostory';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: any): Promise<User> {
    createUserDto.password = await this.hashPassword(createUserDto.password);

    const createdUser = await this.userRepository.create(createUserDto);
    return createdUser;
  }

  async findAll(q: any): Promise<User[]> {
    return await this.userRepository.findAll(q);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findUserByEmail(email);
  }

  async updateOne(userId: string, data: UpdateUserDto) {
    await this.userRepository.updateOne(userId, data);
  }

  async findById(userId: string) {
    return await this.userRepository.findById(userId);
  }

  async delete(id: string) {
    return await this.userRepository.delete(id);
  }

  async hashPassword(data: string) {
    return bcrypt.hash(data, 10);
  }
}
