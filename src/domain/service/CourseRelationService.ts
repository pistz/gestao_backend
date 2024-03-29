import { CourseRelation } from "../entities/CourseRelation.entity";
import { ICourseRelation } from "../interfaces/services/ICourseRelationService";

export class CourseRelationService implements ICourseRelation{
    
    getCourseRelationId(courseId: string, studentId: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getCourseRelation(id: string): Promise<CourseRelation> {
        throw new Error("Method not implemented.");
    }
    deleteCourseRelation(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}