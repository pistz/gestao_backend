import { AttendanceList } from "./AttendanceList.entity";
import { Course } from "./Course.entity";
import { School } from "./School.entity";

export interface Student{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    courseId:Course,
    schoolId:School,
    attendancesId:AttendanceList
}