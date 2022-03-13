import { Injectable } from '@nestjs/common';
import { User } from './../schemas/user.schema';
import { UserRepository } from './../repository/user.repostory';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = await this.userRepository.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findUserByEmail(email);
  }

  async updateOne(userId: string, data: any) {
    await this.userRepository.updateOne(userId, data);
  }
  async findById(userId: string) {
    return await this.userRepository.findById(userId);
  }
}
