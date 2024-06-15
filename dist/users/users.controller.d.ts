import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
