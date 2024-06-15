import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
export declare class StudentsService {
    private readonly usersService;
    private prisma;
    constructor(usersService: UsersService, prisma: PrismaService);
    profile(user: any): Promise<{
        email: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    evaluations(user: any): Promise<{
        evaluationInfo: any;
        courseName: string;
        courseCode: string;
        academicPeriod: string;
        professorNames: string[];
        groupId: number;
        groupName: string;
        groupCode: string;
    }[]>;
    groups(user: any): Promise<{
        groupName: string;
        groupCode: string;
        courseName: string;
        courseCode: string;
        academicPeriod: string;
        numEvaluations: number;
    }[]>;
    evaluationGroup(user: any, evaluationCode: any, groupCode: any): Promise<any[] | {
        evaluationId: number;
        groupId: number;
        students: {
            userId: number;
        }[];
    }>;
    criteria(evaluationCode: any): Promise<{
        id: number;
        name: string;
        description: string;
    }[]>;
    evaluate(studentId: any, criteriaId: any, evaluatedStudentId: any, value: any): Promise<{
        id: number;
        value: number;
        criteriaId: number;
        studentId: number;
        evaluatedStudentId: number;
    }>;
}
