import { AttendanceList } from "./AttendanceList.entity";
import { Course } from "./Course.entity";
import { School } from "./School.entity";

export interface Student{
    id:string,
    name:string,
    email:string,
    school:School,
    course:Course[],
    attendances:AttendanceList[],
}