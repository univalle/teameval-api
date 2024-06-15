import { AdminsService } from './admins.service';
import { UsersService } from 'src/users/users.service';
export declare class AdminsController {
    private readonly adminsService;
    private readonly usersService;
    constructor(adminsService: AdminsService, usersService: UsersService);
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
    create(createUserDto: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole[];
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: any): import(".prisma/client").Prisma.Prisma__UserClient<{
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
    findAllCourses(): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneCourse(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createCourse(createCourseDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCourse(id: string, updateCourseDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeCourse(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findCoursesUser(id: string): Promise<{
        id: number;
        name: string;
    }[]>;
    findAllEvaluations(): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneEvaluation(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createEvaluation(createEvaluationDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateEvaluation(id: string, updateEvaluationDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeEvaluation(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllCriteria(): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneCriteria(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createCriteria(createCriteriaDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCriteria(id: string, updateCriteriaDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeCriteria(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllGroups(): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneGroup(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createGroup(createGroupDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateGroup(id: string, updateGroupDto: any): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeGroup(id: string): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
