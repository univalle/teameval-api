import { Controller, Get } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get('/')
  getAllAdmins(): string {
    return this.adminsService.getAdmins();
  }
}
