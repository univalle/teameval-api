import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'src/common/enums/rol.enum'
import { UsersService } from './users.service'
import { ApiTags } from '@nestjs/swagger'

@Auth(Role.ADMIN)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('users')
  @Post()
  create(createUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiTags('users')
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @ApiTags('users')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @ApiTags('users')
  @Patch(':id')
  update(@Param('id') id: string, updateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @ApiTags('users')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
