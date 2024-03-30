import { CourseRelation } from "../../entities/CourseRelation.entity";

export interface ICourseRelationService {
    createCourseRelation(courseId:string, studentId:number):Promise<void>
    getCourseRelationId(courseId:string, studentId:number):Promise<string>
    getCourseRelation(id:string):Promise<CourseRelation>
    deleteCourseRelation(id:string):Promise<void>
}