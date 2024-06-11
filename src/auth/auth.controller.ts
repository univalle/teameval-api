import { Body, Controller, Post } from '@nestjs/common'
import { Role } from '../common/enums/rol.enum'
import { AuthService } from './auth.service'
import { Auth } from './decorators/auth.decorator'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Auth(Role.ADMIN)
  @ApiTags('auth')
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto)
  }

  @ApiTags('auth')
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto)
  }
}
