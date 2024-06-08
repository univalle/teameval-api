import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      return {
        message: 'User already exists',
      };
    }

    if (
      createUserDto.role !== Role.ADMIN &&
      createUserDto.role !== Role.STUDENT &&
      createUserDto.role !== Role.PROFESSOR
    ) {
      createUserDto.role = Role.STUDENT;
    }

    const newId = crypto.randomUUID();

    const newUser = {
      id: newId,
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
    };

    try {
      const userCreation = await this.prisma.user.create({
        data: newUser,
      });

      return {
        id: userCreation.id,
        email: userCreation.email,
        role: userCreation.role,
      };
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async findOneByEmail(email) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return findUser;
  }

  findByEmailWithPassword(email) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
      },
    });
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
