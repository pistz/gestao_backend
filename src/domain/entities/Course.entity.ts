import { AttendanceList } from "./AttendanceList.entity";
import { School } from "./School.entity";
import { Student } from "./Student.entity";

export interface Course{
    id:string,
    name:string,
    startingYear:string,
    studentId:Student,
    schoolId:School,
    listId:AttendanceList
}