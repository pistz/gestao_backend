import { School } from "./School.entity";
import { Student } from "./Student.entity";

export interface Course {
    id:string,
    name:string,
    startingYear:number,
    students:Student[],
    school:School
}