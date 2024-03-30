import { CourseRelation } from "../../entities/CourseRelation.entity";

export interface ICourseRelationService {
    createCourseRelation(courseId:string, studentId:number):Promise<void>
    getCourseRelationIds(courseId:string, studentId:number):Promise<CourseRelation[]>
    getCourseRelation(id:string):Promise<CourseRelation>
    deleteCourseRelation(id:string):Promise<void>
}