import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create() {
    return 'create user';
  }

  findOneByEmail(user) {
    console.log(user);
    return false;
  }

  findByEmailWithPassword(email) {
    // ['id', 'name', 'email', 'password', 'role']
    return {
      id: 1,
      name: 'John Doe',
      email: email,
      password: 'password',
      role: 'admin',
    };
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
