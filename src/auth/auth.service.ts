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

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.findOneByEmail(registerDto.email)

    if (user) {
      throw new BadRequestException('User already exists')
    }

    const newPassword = await bcryptjs.hash(registerDto.password, 10)

    const result = await this.usersService.create(
      Object.assign(registerDto, { password: newPassword }),
    )

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
    return {
      id: userInfo.id,
      email: userInfo.email,
      role: userInfo.role,
    }
  }
}
