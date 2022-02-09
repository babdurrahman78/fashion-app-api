import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserUpdateDto } from 'src/auth/Dto/user-update.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findUser(email: any) {
    return await this.userRepository.findOne({ email });
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne(id);
  }

  async update(updateDto: UserUpdateDto) {
    return await this.userRepository.save({
      ...updateDto,
    });
  }
}
