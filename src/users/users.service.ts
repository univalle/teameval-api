import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    if (this.users.find((u) => u.email === createUserDto.email)) {
      console.log('User already exists');
      return 'User already exists';
    }

    this.users.push({
      id: this.users.length + 1,
      ...createUserDto,
      role: 'user',
    });

    console.log('usuarios', this.users);

    const newUserInfo = this.users.find((u) => u.email === createUserDto.email);

    return {
      id: newUserInfo.id,
      email: newUserInfo.email,
      role: newUserInfo.role,
    };
  }

  findOneByEmail(user) {
    return this.users.find((u) => u.email === user.email);
  }

  findByEmailWithPassword(email) {
    return this.users.find((u) => u.email === email);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update() {
    return `This action updates a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
