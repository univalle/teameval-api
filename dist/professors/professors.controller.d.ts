import { ProfessorsService } from './professors.service';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
export declare class ProfessorsController {
    private readonly professorsService;
    constructor(professorsService: ProfessorsService);
    checkUser(user: UserActiveInterface): void;
    profile(user: UserActiveInterface): Promise<{
        email: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    courses(user: UserActiveInterface): Promise<{
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
    groups(user: UserActiveInterface): Promise<{
        id: number;
        code: string;
        name: string;
        idCourse: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    groupStudents(user: UserActiveInterface, groupCode: string): Promise<{
        id: number;
        email: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    evaluations(user: UserActiveInterface): Promise<{
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
    criteria(user: UserActiveInterface, evaluationCode: string): Promise<{
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
    evaluationGroup(user: UserActiveInterface, groupCode: string, studentId: string): Promise<{
        id: number;
        code: string;
        name: string;
    }[]>;
    results(user: UserActiveInterface, evaluationCode: string, groupCode: string, studentId: string): Promise<{
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
    addStudentCourse(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    removeStudentCourse(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    createGroup(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    updateGroup(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    deleteGroup(user: UserActiveInterface, groupCode: string): Promise<{
        message: string;
    }>;
    addStudentGroup(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    removeStudentGroup(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    createEvaluation(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    updateEvaluation(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    deleteEvaluation(user: UserActiveInterface, evaluationCode: string): Promise<{
        message: string;
    }>;
    createCriteria(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    updateCriteria(user: UserActiveInterface, body: any): Promise<{
        message: string;
    }>;
    deleteCriteria(user: UserActiveInterface, criteriaCode: string): Promise<{
        message: string;
    }>;
}
