import { AttendanceList } from "./AttendanceList.entity";
import { Course } from "./Course.entity";

export interface Student{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    course:Course,
    list:AttendanceList
}