import { Body, Controller, Get, Post } from '@nestjs/common'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'
import { Role } from '../common/enums/rol.enum'
import { AuthService } from './auth.service'
import { Auth } from './decorators/auth.decorator'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('auth')
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto)
  }

  @ApiTags('auth')
  @Post('register-admin')
  @Auth(Role.ADMIN)
  registerAdmin(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.registerAdmin(registerDto)
  }

  @ApiTags('auth')
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto)
  }

  @ApiTags('auth')
  @Get('profile')
  @Auth(Role.ADMIN)
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.authService.profile(user)
  }
}
