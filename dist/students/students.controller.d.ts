import { StudentsService } from './students.service';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    checkUser(user: UserActiveInterface): void;
    profile(user: UserActiveInterface): Promise<{
        email: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    evaluations(user: UserActiveInterface): Promise<{
        evaluationInfo: any;
        courseName: string;
        courseCode: string;
        academicPeriod: string;
        professorNames: string[];
        groupId: number;
        groupName: string;
        groupCode: string;
    }[]>;
    groups(user: UserActiveInterface): Promise<{
        groupName: string;
        groupCode: string;
        courseName: string;
        courseCode: string;
        academicPeriod: string;
        numEvaluations: number;
    }[]>;
    courses(user: UserActiveInterface): Promise<{
        groupName: string;
        groupCode: string;
        courseName: string;
        courseCode: string;
        academicPeriod: string;
        numEvaluations: number;
    }[]>;
    evaluationGroup(user: UserActiveInterface, evaluationCode: string, groupCode: string): Promise<any[] | {
        evaluationId: number;
        groupId: number;
        students: {
            userId: number;
        }[];
    }>;
    criterias(user: UserActiveInterface, evaluationCode: string): Promise<{
        id: number;
        name: string;
        description: string;
    }[]>;
    evaluate(user: UserActiveInterface, body: any): Promise<{
        id: number;
        value: number;
        criteriaId: number;
        studentId: number;
        evaluatedStudentId: number;
    }>;
}
