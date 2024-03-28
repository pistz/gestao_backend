import { Course } from "./Course.entity"
import { Student } from "./Student.entity"

export interface AttendanceList {
    id:string,
    attendanceDate:Date
    course:Course,
    student:Student
}