import { User } from "./User.entity";
import { Student } from "./Student.entity";
import { Course } from "./Course.entity";

export interface School{
    id:string,
    schoolName:string,
    userId:User
    studentId:Student
    courseId:Course
}