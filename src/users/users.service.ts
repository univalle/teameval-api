import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma.service'
import { Role } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const existingUser = await this.findOneByEmail(createUserDto.email)

    if (existingUser) {
      return {
        message: 'User already exists',
      }
    }

    createUserDto.role = await this.setDefaultRole(createUserDto.role)

    const newId = crypto.randomUUID()

    const newUser = {
      id: newId,
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
    }

    try {
      const userCreation = await this.prisma.user.create({
        data: newUser,
      })

      console.log(newUser)

      return {
        id: userCreation.id,
        email: userCreation.email,
        role: userCreation.role,
      }
    } catch (error) {
      throw new Error('Failed to create user')
    }
  }

  async findOneByEmail(email) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    return findUser
  }

  async findByEmailWithPassword(email) {
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
    })
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(id, updateUserDto) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    })
  }

  async remove(id) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    })
  }

  async checkIfUsersExistByEmail(email) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    return user ? true : false
  }

  async setDefaultRole(role) {
    if (
      role !== Role.ADMIN &&
      role !== Role.STUDENT &&
      role !== Role.PROFESSOR
    ) {
      return Role.STUDENT
    }

    return role
  }
}
