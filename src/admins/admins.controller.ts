import { Controller, Get } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { ActiveUser } from 'src/common/decorators/active-user.decorator'
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface'

@Auth(Role.ADMIN)
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get('profile')
  @ApiTags('Admins')
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.adminsService.profile(user)
  }
}
