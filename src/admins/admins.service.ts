import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AdminsService {
  private admins = [
    {
      id: 1,
      name: 'admin1',
      email: 'admin@gmail.com',
      password: 'admin123',
    },
  ];

  getAdmins(): string {
    return JSON.stringify({ message: 'admins' });
  }

  createAdmin(admin): string {
    const id = crypto.randomUUID();
    admin.id = id;
    this.admins.push(admin);
    return JSON.stringify({ message: 'create admin with id ' + id });
  }

  getAdmin(id): any {
    const admin = this.admins.find((admin) => admin.id === id);

    if (!admin) {
      throw new NotFoundException(`Admin with id ${id} not found`);
    }

    return admin;
  }
}
