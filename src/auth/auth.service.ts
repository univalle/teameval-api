import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { RegisterDto } from './dto/register.dto'
import { JwtService } from '@nestjs/jwt'
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto'
import { Role } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ name, email, password, role }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email)

    if (user) {
      throw new BadRequestException('User already exists')
    }

    const newPassword = await bcryptjs.hash(password, 10)

    const result = await this.usersService.create({
      name,
      email,
      password: newPassword,
      role,
    })

    if (role === Role.STUDENT) {
      await this.usersService.createStudent(result.id)
    } else if (role === Role.PROFESSOR) {
      await this.usersService.createProfessor(result.id)
    } else if (role === Role.ADMIN) {
      await this.usersService.createAdmin(result.id)
    } else {
      throw new BadRequestException('Invalid role')
    }

    return result
  }

  async registerAdmin({ name, email, password }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email)

    if (user) {
      throw new BadRequestException('User already exists')
    }

    const newPassword = await bcryptjs.hash(password, 10)

    const result = await this.usersService.create({
      name,
      email,
      password: newPassword,
      role: Role.ADMIN,
    })

    return result
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(email)
    if (!user) {
      throw new UnauthorizedException('email is wrong')
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong')
    }

    const payload = { email: user.email, role: user.role }
    const token = await this.jwtService.signAsync(payload)

    return {
      token,
      email,
      role: user.role,
    }
  }

  async profile(user) {
    const userInfo = await this.usersService.findOneByEmail(user.email)
    const adminId = await this.usersService.findAdminId(userInfo.id)
    return {
      id: userInfo.id,
      email: userInfo.email,
      role: userInfo.role,
      adminId: adminId.id,
    }
  }
}
