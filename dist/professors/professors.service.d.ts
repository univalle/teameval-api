import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
export declare class ProfessorsService {
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
    courses(user: any): Promise<{
        professorCourses: {
            course: {
                id: number;
                code: string;
                name: string;
                description: string;
                academicPeriod: string;
                createdAt: Date;
                updatedAt: Date;
            };
        }[];
    }>;
    groups(user: any): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    groupStudents(groupCode: string): Promise<{
        id: number;
        email: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    evaluations(user: any): Promise<{
        proffesorEvaluations: {
            id: number;
            code: string;
            name: string;
            description: string;
            idProfessor: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    criterias(evaluationCode: string): Promise<{
        criterias: {
            id: number;
            code: string;
            name: string;
            description: string;
            weight: number;
            evaluationId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    evaluationGroupStudent(groupCode: string, studentId: string): Promise<{
        id: number;
        code: string;
        name: string;
    }[]>;
    results(evaluationCode: string, groupCode: string, studentId: string): Promise<{
        id: number;
        criteria: {
            name: string;
            evaluation: {
                name: string;
            };
            description: string;
        };
        value: number;
        evaluatedStudent: {
            email: string;
            id: number;
            name: string;
        };
    }[]>;
    addStudentCourse(studentId: string, courseId: string): Promise<{
        message: string;
    }>;
    removeStudentCourse(studentId: string, courseId: string): Promise<{
        message: string;
    }>;
    createGroup(name: string, code: string, course: string): Promise<{
        message: string;
    }>;
    updateGroup(name: string, code: string): Promise<{
        message: string;
    }>;
    deleteGroup(groupCode: string): Promise<{
        message: string;
    }>;
    addStudentGroup(studentId: string, groupCode: string): Promise<{
        message: string;
    }>;
    removeStudentGroup(studentId: string, groupCode: string): Promise<{
        message: string;
    }>;
    createEvaluation(code: string, name: string, description: string, professorId: string): Promise<{
        message: string;
    }>;
    updateEvaluation(code: string, name: string, description: string): Promise<{
        message: string;
    }>;
    deleteEvaluation(evaluationCode: string): Promise<{
        message: string;
    }>;
    createCriteria(code: string, name: string, description: string, evaluationCode: string, weight: number): Promise<{
        message: string;
    }>;
    updateCriteria(code: string, name: string, description: string, weight: number): Promise<{
        message: string;
    }>;
    deleteCriteria(criteriaCode: string): Promise<{
        message: string;
    }>;
}
