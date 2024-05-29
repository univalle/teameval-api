import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @ApiTags('admin')
  @Get()
  getAllAdmins(): any {
    return this.adminsService.getAdmins();
  }

  @ApiTags('admin')
  @Get(':id') // 'admins/:id
  getAdmin(@Param('id') id: string): any {
    return this.adminsService.getAdmin(id);
  }

  @ApiTags('admin')
  @Post()
  createAdmin(@Body() body: any): any {
    return this.adminsService.createAdmin(body);
  }
}
