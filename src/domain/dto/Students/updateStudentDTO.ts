import { AttendanceList } from "../../entities/AttendanceList.entity";
import { Course } from "../../entities/Course.entity";
import { School } from "../../entities/School.entity";

export interface updateStudentDTO{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    courseId:string,
    schoolId:string,
    listId?:string,
}