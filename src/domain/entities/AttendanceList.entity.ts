import { Student } from "./Student.entity";

export interface AttendanceList{
    id:string,
    attendanceDate:Date,
    isPresent:boolean,
    students:Student[],
}