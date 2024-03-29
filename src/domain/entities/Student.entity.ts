import { CourseRelation } from "./CourseRelation.entity";
import { ListRelation } from "./ListRelation.entity";
export interface Student{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    courses:CourseRelation[],
    lists:ListRelation[]
}