import { Course } from "./Course.entity";
import { Student } from "./Student.entity";
import { User } from "./User.entity";

export interface School {
    id:string,
    schoolName:string,
    users:User[],
    students:Student[],
    courses:Course[]
}