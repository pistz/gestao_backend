import { CourseRelation } from "../../entities/CourseRelation.entity";

export interface ICourseRelation {
    getCourseRelationId(courseId:string, studentId:number):Promise<CourseRelation>
    getCourseRelation(id:string):Promise<CourseRelation>
    deleteCourseRelation(id:string):Promise<void>
}