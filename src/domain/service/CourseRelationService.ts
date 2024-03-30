import { CourseRelationRepository } from "../../repositories/CourseStudentRelationRepository";
import { CourseRelation } from "../entities/CourseRelation.entity";
import { ICourseRelationService } from "../interfaces/services/ICourseRelationService";
import { BaseService } from "./base/baseService";

export class CourseRelationService extends BaseService implements ICourseRelationService{

    private courseRelationRepository:CourseRelationRepository;

    constructor(courseRelationRepository:CourseRelationRepository){
        super();
        this.courseRelationRepository = courseRelationRepository;
    }

    async createCourseRelation(courseId: string, studentId: number): Promise<void> {
        await this.courseRelationRepository.createCourseRelation(courseId, studentId);
    }
    
    async getCourseRelationId(courseId: string, studentId: number): Promise<string> {
        const courseRelationId = await this.courseRelationRepository.getCourseRelationId(courseId, studentId);
        return courseRelationId;
    }

    async getCourseRelation(id: string): Promise<CourseRelation> {
        const courseRelation = await this.courseRelationRepository.getCourseRelation(id);
        return courseRelation;
    }

    async deleteCourseRelation(id: string): Promise<void> {
        await this.courseRelationRepository.deleteCourseRelation(id);
    }

}