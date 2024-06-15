import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
export declare class AdminsService {
    private readonly usersService;
    private prisma;
    constructor(usersService: UsersService, prisma: PrismaService);
    findAllCourses(): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneCourse(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createCourse(data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCourse(id: number, data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeCourse(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        academicPeriod: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findCoursesUser(id: number): Promise<{
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
    findOneEvaluation(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createEvaluation(data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateEvaluation(id: number, data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        idProfessor: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeEvaluation(id: number): Promise<{
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
    findOneCriteria(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createCriteria(data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCriteria(id: number, data: any): Promise<{
        id: number;
        code: string;
        name: string;
        description: string;
        weight: number;
        evaluationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeCriteria(id: number): Promise<{
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
    findOneGroup(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createGroup(data: any): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateGroup(id: number, data: any): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeGroup(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
