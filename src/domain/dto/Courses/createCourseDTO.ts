import { School } from "../../entities/School.entity";

export interface createCourseDTO {
    name:string,
    startingYear:number,
    schoolId:School,
    createdAt:Date,
    modifiedAt:Date
}