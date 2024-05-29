import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminsService {
  getAdmins(): string {
    return JSON.stringify({ message: 'admins' });
  }
}
