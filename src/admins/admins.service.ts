import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  async getAdmins(): Promise<any[]> {
    // Utiliza el método findMany de Prisma para obtener todos los administradores
    const admins = await this.prisma.admin.findMany();

    // Si no hay ningún administrador, puedes devolver un arreglo vacío o lanzar un error, según tus necesidades
    if (!admins || admins.length === 0) {
      return []; // Devuelve un arreglo vacío si no hay administradores
      // También podrías lanzar un error, por ejemplo:
      // throw new NotFoundException('No admins found');
    }

    // Devuelve la lista de administradores
    return admins;
  }

  async createAdmin(admin: any): Promise<string> {
    const id = crypto.randomUUID();
    admin.id = id;

    // Crear el administrador en la base de datos utilizando Prisma y esperar a que se complete
    await this.prisma.admin.create({ data: admin });

    // Devolver un mensaje que confirme la creación del administrador
    return JSON.stringify({ message: 'create admin with id ' + id });
  }

  async getAdmin(id: string): Promise<any> {
    const admin = await this.prisma.admin.findUnique({ where: { id } });

    if (!admin) {
      throw new NotFoundException(`Admin with id ${id} not found`);
    }

    return admin;
  }
}
