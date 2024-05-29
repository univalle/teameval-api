import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  getAllAdmins(): string {
    return this.adminsService.getAdmins();
  }

  @Get(':id') // 'admins/:id
  getAdmin(@Param('id') id: string): any {
    return this.adminsService.getAdmin(id);
  }

  @Post()
  createAdmin(@Body() body: any): string {
    return this.adminsService.createAdmin(body);
  }
}
